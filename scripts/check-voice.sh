#!/bin/bash
# Voice convention check: scans for third-person "Jay" in body copy.
# Body copy describing Jay's actions must use "I" / "my" / "me".
# See CLAUDE.md voice rules for exceptions (CTAs, bylines, schema, alt text).

set -e

cd "$(dirname "$0")/.."

# Patterns that should never appear in body copy
# (Jay + action verb, or Jay's + role-related noun)
PATTERN='Jay (helps|builds|works|coordinates|integrates|specializes|provides|offers|will help|will model|will be in touch|can help|can optimize|doesn|is legally|has the expertise|is based|spends|listens|advises|reviews|takes|sees|knows|guides|leads|tailors|believes|thinks|focuses|manages|handles|recommends)|Jay&apos;s (approach|philosophy|practice|method|process|focus|strategy|framework|expertise)'

# Run grep, filter out legitimate exceptions
RESULTS=$(grep -rnE "$PATTERN" src/ 2>/dev/null \
  | grep -v "with Jay" \
  | grep -v "Schedule.*Jay" \
  | grep -v "talk.*Jay" \
  | grep -v "@type.*Person" \
  | grep -v 'name: .Jay' \
  | grep -v 'alt=.Jay' \
  || true)

if [ -n "$RESULTS" ]; then
  echo ""
  echo "Third-person 'Jay' found in body copy:"
  echo ""
  echo "$RESULTS"
  echo ""
  echo "Body copy must use 'I' / 'my' / 'me' for Jay's voice."
  echo "See CLAUDE.md voice rules for legitimate exceptions"
  echo "(CTAs, bylines, schema, image alt text, testimonials)."
  echo ""
  exit 1
else
  echo "Voice check passed: no third-person Jay in body copy."
  exit 0
fi
