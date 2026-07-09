#!/bin/bash

# Define the pattern for the backup files
BACKUP_PATTERN="db_backup_*.sql.gz"
# Define how many backups to keep
KEEP_COUNT=5

# --- Define the backup directory relative to the script location ---

# Get the directory where the script is located, handling symlinks and various execution methods
SCRIPT_DIR="$(dirname "$(realpath "$0")")"
BACKUP_DIR="$SCRIPT_DIR/../drush-backups/"

# Change to the backup directory before processing files
cd "$BACKUP_DIR" || { echo "Error: Cannot change to backup directory $BACKUP_DIR"; exit 1; }

echo "Processing backups in directory: $(pwd)"

# Find all files matching the pattern, sort them by modification time (oldest first),
# and count how many files are candidates for deletion.
FILES_TO_DELETE=$(ls -t $BACKUP_PATTERN 2>/dev/null | tail -n +$((KEEP_COUNT + 1)))


# Check if there are any files to delete
if [ -n "$FILES_TO_DELETE" ]; then
    echo "Deleting old backups, keeping the most recent $KEEP_COUNT:"

    # Loop through the list of files to delete
    # Files_TO_DELETE contains just the filenames now since we changed directories
    for file in $FILES_TO_DELETE; do
        echo "Deleting: $file"
        rm "$file"
    done
    echo "Deletion complete."
else
    echo "No old backups found to delete that match the pattern $BACKUP_PATTERN, or fewer than $KEEP_COUNT exist."
fi
