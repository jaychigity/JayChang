#!/bin/bash
# PostToolUse hook: scan for third-person Jay after Edit/Write to .tsx in src/.
# Surfaces violations as additionalContext so the model can fix immediately.
# Non-blocking: never deny the tool call.

# Read hook input JSON from stdin
input=$(cat)

# Extract file path from tool_input or tool_response
f=$(echo "$input" | jq -r '.tool_input.file_path // .tool_response.filePath // empty')

# Only act on .tsx files inside src/
case "$f" in
  *src/*.tsx) ;;
  *) exit 0 ;;
esac

# Run the voice check (script lives next to this one)
hook_dir="$(dirname "$0")"
project_root="$(cd "$hook_dir/.." && pwd)"
out=$(cd "$project_root" && bash scripts/check-voice.sh 2>&1)
status=$?

# Exit silently if no violations
if [ $status -eq 0 ]; then
  exit 0
fi

# Otherwise inject violations back to the model as PostToolUse context
jq -n --arg msg "Voice check failed after this edit:

$out

Body copy must use 'I' / 'my' / 'me' for Jay's voice. CTAs, bylines, brand names, schema, and alt text are exempt. Fix the flagged lines before continuing." \
  '{hookSpecificOutput: {hookEventName: "PostToolUse", additionalContext: $msg}}'

# Exit 0 so we surface as a warning, not a blocking failure
exit 0
