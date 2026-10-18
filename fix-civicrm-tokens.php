#!/usr/bin/env php
<?php
/**
 * Fixes deprecated CiviCRM tokens in message templates using PDO.
 *
 * Table: civicrm_msg_template (gos2_crm DB)
 * Columns: msg_html, msg_text, msg_subject
 *
 * Usage: php fix-civicrm-tokens.php [--yes]
 */

$dbHost = 'localhost';
$dbPort = '3306';
$dbName = 'gos2_crm';
$dbUser = 'gos2_crm';
$dbPassword = 'MJdo9rUk6c]a4T1TTEv';
$table = 'civicrm_msg_template';

// Check for the automatic --yes flag
$autoApprove = in_array('--yes', $argv);

$replacements = [
        '{$totalTaxAmount}'           => '{contribution.tax_amount}',
        '{$billingName}'              => '{contribution.address_id.name}',
        '{$selectPremium}'            => '{contribution_product.id|boolean}',
        '{$address}'                  => '{contribution.address_id.display}',
        '{$amount}'                   => '{see default template for how to show this}',
        '{$mem_start_date}'           => '{membership.start_date}',
        '{$mem_end_date}'             => '{membership.end_date}',
        '{$membership_name}'          => '{membership.membership_type_id:name}',
        '{$currency}'                 => '{contribution.currency}',
        '{$priceSetID}'               => '{no longer available / relevant}',
        '{$useForMember}'             => '{no longer available / relevant}',
        '{$price}'                    => '{contribution_product.product_id.price|crmMoney}',
        '{$dataArray}'                => '{see default template for how to show this}',
        '{$paidBy}'                   => '{contribution.payment_instrument_id:label}',
        '{$checkNumber}'              => '{contribution.check_number}',
        '{$receive_date}'             => '{contribution.receive_date}',
        '{$is_pay_later}'             => '{contribution.is_pay_later}',
        '{$totalAmount}'              => '{contribution.total_amount}',
        '{$location}'                 => '{event.location}',
        '{$isShowLocation}'           => '{event.is_show_location|boolean}',
        '{$event.participant_role}'   => '{participant.role_id:label}',
        '{$financialTypeName}'        => '{contribution.financial_type_id:label}',
        '{$trxn_id}'                  => '{contribution.trxn_id}',
        '{$lineItem}'                 => '{$lineItems}',
        '{$individual}'               => '{see default template for how to show this}',
        '{$isAdditionalParticipant}'  => '{see default template for how to show this}',
        '{$register_date}'            => '{participant.register_date}',
        '{$participant_status}'       => '{participant.status_id:label}',
        '{$participant.role}'         => '{participant.role_id:label}',
        '{$paymentsComplete}'         => '{contribution.balance_amount}',
];

try {
    $dsn = "mysql:host={$dbHost};port={$dbPort};dbname={$dbName};charset=utf8mb4";
    $pdo = new PDO($dsn, $dbUser, $dbPassword, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    fwrite(STDERR, "Database connection failed: " . $e->getMessage() . "\n");
    exit(1);
}

echo "Scanning database for legacy tokens...\n";
$stmt = $pdo->query("SELECT id, workflow_name, msg_subject, msg_html, msg_text FROM {$table}");
$templates = $stmt->fetchAll();

foreach ($templates as $row) {
    $id       = $row['id'];
    $workflow = $row['workflow_name'];
    $subject  = $row['msg_subject'] ?? '';
    $msgHtml  = $row['msg_html'] ?? '';
    $msgText  = $row['msg_text'] ?? '';

    $foundTokens = [];
    foreach ($replacements as $old => $new) {
        $cnt = substr_count($msgHtml, $old) + substr_count($msgText, $old) + substr_count($subject, $old);
        if ($cnt > 0) {
            $foundTokens[$old] = ['new' => $new, 'count' => $cnt];
        }
    }

    if (empty($foundTokens)) {
        continue;
    }

    echo str_repeat('=', 70) . "\n";
    echo "ID: $id | Workflow: $workflow\n";
    echo "Subject: $subject\n\n";
    echo "  Token fixes identified:\n";
    foreach ($foundTokens as $old => $info) {
        echo "   {$old}  =>  {$info['new']}  ({$info['count']}x)\n";
    }

    // Apply translations
    $newSubject = str_replace(array_keys($replacements), array_values($replacements), $subject);
    $newHtml    = str_replace(array_keys($replacements), array_values($replacements), $msgHtml);
    $newText    = str_replace(array_keys($replacements), array_values($replacements), $msgText);

    $updateFields = [];
    $params = [];

    if ($newSubject !== $subject) {
        $updateFields[] = "msg_subject = :subject";
        $params[':subject'] = $newSubject;
    }
    if ($newHtml !== $msgHtml) {
        $updateFields[] = "msg_html = :html";
        $params[':html'] = $newHtml;
    }
    if ($newText !== $msgText) {
        $updateFields[] = "msg_text = :text";
        $params[':text'] = $newText;
    }

    if (!empty($updateFields)) {
        $apply = false;
        if ($autoApprove) {
            $apply = true;
        } else {
            echo "\n  Execute updates for template ID {$id}? [y/N]: ";
            $ans = trim(fgets(STDIN));
            if (strcasecmp($ans, 'y') === 0) {
                $apply = true;
            }
        }

        if ($apply) {
            $params[':id'] = (int)$id;
            $sql = "UPDATE {$table} SET " . implode(', ', $updateFields) . " WHERE id = :id";

            try {
                $updateStmt = $pdo->prepare($sql);
                $updateStmt->execute($params);
                echo "  --> APPLIED SUCCESSFULLY\n";
            } catch (PDOException $ex) {
                echo "  --> FAILED: " . $ex->getMessage() . "\n";
            }
        } else {
            echo "  --> SKIPPED\n";
        }
    }
}

echo "\nDone.\n";
