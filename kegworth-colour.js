/**
 * Processes order data to:
 * 1. Normalize child names and catch single-digit class codes (e.g. 2L, 1M, 5-6R).
 * 2. Perform fuzzy-matching to aggregate typos (e.g., Totato -> Totaro).
 * 3. Sum Gross Sales per child and output Top 10 to "Top 10 Children".
 * 4. Output child names, class codes, and messages to "Child Messages" (excluding blank messages).
 */
function processOrdersAndMessages() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sourceSheet = ss.getSheetByName("Halloween-orders-all") || ss.getActiveSheet();
    var data = sourceSheet.getDataRange().getValues();

    if (data.length <= 1) {
        showAlert("Notice", "No data found to process.");
        return;
    }

    // 1. DYNAMIC HEADER ROW DETECTION
    var headerRowIdx = 0;
    for (var r = 0; r < Math.min(5, data.length); r++) {
        var rowStr = data[r].join(" ").toLowerCase();
        if (rowStr.includes("gross sales") || rowStr.includes("modifiers") || rowStr.includes("item") || rowStr.includes("net sales")) {
            headerRowIdx = r;
            break;
        }
    }

    var headers = data[headerRowIdx];
    var childIdx = -1, grossSalesIdx = -1;

    for (var i = 0; i < headers.length; i++) {
        var h = headers[i].toString().trim().toLowerCase();
        if (childIdx === -1 && (h.includes("modifiers applied") || h === "modifiers" || h.includes("modifiers") || h.includes("child") || h.includes("student") || h === "name")) {
            childIdx = i;
        }
        if (grossSalesIdx === -1 && (h === "gross sales" || h.includes("gross sales") || h === "net sales" || h.includes("total") || h.includes("amount"))) {
            grossSalesIdx = i;
        }
    }

    // Fallbacks if auto-detection fails
    if (childIdx === -1) childIdx = 8;        // Column I
    if (grossSalesIdx === -1) grossSalesIdx = 6; // Column G

    // 2. AGGREGATE FUNDS & EXTRACT NON-BLANK MESSAGES
    var totalsMap = {};
    var knownNames = []; // Array of canonical names
    var messagesData = [["Child Name", "Class", "Message"]];

    for (var r = headerRowIdx + 1; r < data.length; r++) {
        var row = data[r];
        var rawChildText = row[childIdx] ? row[childIdx].toString() : "";

        var parsed = parseChildAndMessage(rawChildText);
        var candidateName = parsed.name;
        var classCode = parsed.classCode;
        var message = parsed.message;

        // Skip any duplicated header rows in the data body
        if (isHeaderValue(candidateName) || isHeaderValue(message)) {
            continue;
        }

        // Parse Gross Sales amount
        var rawAmount = row[grossSalesIdx];
        var amount = 0;
        if (typeof rawAmount === "number") {
            amount = rawAmount;
        } else if (rawAmount) {
            amount = parseFloat(rawAmount.toString().replace(/[^0-9.-]+/g, "")) || 0;
        }

        if (candidateName !== "") {
            // Match candidate against existing canonical names
            var matchedName = findMatchingChildName(candidateName, knownNames);

            if (!matchedName) {
                matchedName = candidateName;
                knownNames.push(matchedName);
            }

            // Sum funds for Top 10 aggregation
            totalsMap[matchedName] = (totalsMap[matchedName] || 0) + amount;

            // Add to "Child Messages" tab ONLY if a non-blank message exists
            if (message !== "") {
                messagesData.push([matchedName, classCode, message]);
            }
        }
    }

    // 3. SORT BY SUMMED GROSS SALES AND TAKE TOP 10
    var sortedChildren = [];
    for (var child in totalsMap) {
        sortedChildren.push([child, totalsMap[child]]);
    }

    sortedChildren.sort(function(a, b) {
        return b[1] - a[1];
    });

    var top10 = sortedChildren.slice(0, 10);

    // 4. BUILD TOP 10 OUTPUT MATRIX
    var top10Data = [["Rank", "Child Name", "Total Funds Raised"]];
    for (var k = 0; k < top10.length; k++) {
        top10Data.push([k + 1, top10[k][0], top10[k][1]]);
    }

    // 5. WRITE TO "Top 10 Children" TAB
    var top10TabName = "Top 10 Children";
    var top10Sheet = ss.getSheetByName(top10TabName) || ss.insertSheet(top10TabName);
    top10Sheet.clear();
    top10Sheet.getRange(1, 1, top10Data.length, 3).setValues(top10Data);

    top10Sheet.getRange("A1:C1").setFontWeight("bold").setBackground("#e0e0e0");
    if (top10Data.length > 1) {
        top10Sheet.getRange(2, 3, top10Data.length - 1, 1).setNumberFormat("$#,##0.00");
    }
    top10Sheet.setColumnWidth(1, 60);  // Rank
    top10Sheet.setColumnWidth(2, 260); // Child Name
    top10Sheet.setColumnWidth(3, 160); // Total Funds Raised

    // 6. WRITE TO "Child Messages" TAB
    var messagesTabName = "Child Messages";
    var messagesSheet = ss.getSheetByName(messagesTabName) || ss.insertSheet(messagesTabName);
    messagesSheet.clear();

    if (messagesData.length > 0) {
        messagesSheet.getRange(1, 1, messagesData.length, 3).setValues(messagesData);
        messagesSheet.getRange("A1:C1").setFontWeight("bold").setBackground("#e0e0e0");
        messagesSheet.setColumnWidth(1, 260); // Child Name
        messagesSheet.setColumnWidth(2, 120); // Class
        messagesSheet.setColumnWidth(3, 450); // Message
    }

    showAlert("Complete!", "Generated '" + top10TabName + "' and '" + messagesTabName + "' tabs.");
}

/**
 * Parses child name, class code, and message from Square modifier strings.
 */
function parseChildAndMessage(rawText) {
    if (!rawText || rawText.toString().trim() === "") {
        return { name: "", classCode: "", message: "" };
    }

    var text = cleanTextAndEncoding(rawText.toString());

    // 1. Extract Message (anything after "Message:")
    var message = "";
    var msgSplit = text.split(/Message:\s*/i);
    if (msgSplit.length > 1) {
        message = msgSplit[1].trim();
    }
    var nameText = msgSplit[0];

    // 2. Clean Name Prefixes (Child's Name:, Child Name:, Student Name:, Name:)
    nameText = nameText.replace(/^(?:Child['’`']?s?\s*Name|Student\s*Name|Participant\s*Name|Name)\s*:\s*/i, "").trim();

    // 3. Extract Class Code (supports 2L, 1M, 3-4R, 5-6L, 1/2B, K-Yellow, Kindy Blue, K1, etc.)
    var classCode = "";
    var classPattern = /\b(?:K|Kindy|Kindergarten|Prep|Preschool|Yr|\d+)(?:[/\-]\d+)?[\s\-_]+[A-Za-z0-9]+\b|\b\d+[A-Za-z]\b|\b[Kk]\d+\b|\b\d+[\/\-]\d+[A-Za-z]?\b/i;
    var classMatch = nameText.match(classPattern);

    if (classMatch) {
        classCode = classMatch[0].trim().toUpperCase();
        nameText = nameText.replace(classMatch[0], ""); // Strip class code from name text
    }

    var name = sanitizeChildName(nameText);

    return { name: name, classCode: classCode, message: message };
}

/**
 * Standardizes name: keeps First + Last Name, ignoring residual label keywords.
 */
function sanitizeChildName(rawName) {
    if (!rawName) return "";

    var words = rawName.match(/[A-Za-z]+/g);
    if (!words || words.length === 0) return "";

    var ignoreKeywords = ["child", "children", "name", "student", "message", "modifiers"];
    var cleanWords = [];
    for (var i = 0; i < words.length; i++) {
        var w = words[i].toLowerCase();
        if (ignoreKeywords.indexOf(w) === -1) {
            cleanWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase());
        }
    }

    if (cleanWords.length === 0) return "";
    if (cleanWords.length === 1) return cleanWords[0];

    return cleanWords[0] + " " + cleanWords[cleanWords.length - 1];
}

/**
 * Matches candidates by exact First Name + Fuzzy Last Name.
 */
function findMatchingChildName(candidate, existingNames) {
    var candParts = candidate.split(" ");
    if (candParts.length < 2) {
        return existingNames.indexOf(candidate) !== -1 ? candidate : null;
    }

    var candFirst = candParts[0].toLowerCase();
    var candLast = candParts[candParts.length - 1].toLowerCase();

    for (var i = 0; i < existingNames.length; i++) {
        var existParts = existingNames[i].split(" ");
        if (existParts.length < 2) continue;

        var existFirst = existParts[0].toLowerCase();
        var existLast = existParts[existParts.length - 1].toLowerCase();

        if (candFirst === existFirst) {
            var dist = getLevenshteinDistance(candLast, existLast);
            var maxLen = Math.max(candLast.length, existLast.length);
            var similarity = maxLen === 0 ? 1.0 : (1.0 - dist / maxLen);

            if (similarity >= 0.70) {
                return existingNames[i];
            }
        }
    }
    return null;
}

function getLevenshteinDistance(a, b) {
    var matrix = [];
    for (var i = 0; i <= b.length; i++) matrix[i] = [i];
    for (var j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (var i = 1; i <= b.length; i++) {
        for (var j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

/**
 * Checks if a string value matches table header text to prevent duplicated headers.
 */
function isHeaderValue(val) {
    if (!val) return false;
    var str = val.toString().toLowerCase().trim();
    return str === "child name" || str === "message" || str === "class" || str === "modifiers applied" || str === "modifiers";
}

/**
 * Clean UTF-8 encoding glitches and invisible unicode whitespace.
 */
function cleanTextAndEncoding(str) {
    return str
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .replace(/\u00A0/g, " ")
        .replace(/â€re/g, "'re")
        .replace(/â€™/g, "'")
        .replace(/â€/g, "'")
        .replace(/Ã©/g, "é");
}

/**
 * Helper to prevent UI errors in trigger environments
 */
function showAlert(title, message) {
    try {
        SpreadsheetApp.getUi().alert(title, message, SpreadsheetApp.getUi().ButtonSet.OK);
    } catch (e) {
        Logger.log(title + ": " + message);
    }
}
