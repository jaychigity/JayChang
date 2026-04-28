#!/bin/bash
# Voice convention check: scans for third-person "Jay" in body copy.
# Body copy describing Jay's actions must use "I" / "my" / "me".
# See CLAUDE.md voice rules for exceptions (CTAs, bylines, schema, alt text).

set -e

cd "$(dirname "$0")/.."

# Patterns that should never appear in body copy.
# Three families of violations are caught:
#  1. "Jay [verb]"        e.g. "Jay helps Apple employees..."
#  2. "Jay Chang [verb]"  e.g. "Jay Chang specializes in pension planning..."
#  3. "Jay's [noun]"      e.g. "Jay's approach to wealth management..."
#  4. "we [verb]" / "our [noun]" used in Jay-voice contexts where "I"/"my" should be used
VERBS='helps|builds|works|coordinates|integrates|specializes|provides|offers|will help|will model|will be in touch|can help|can optimize|doesn|is legally|has the expertise|is based|spends|listens|advises|reviews|takes|sees|knows|guides|leads|tailors|believes|thinks|focuses|manages|handles|recommends|chose|enjoys|understands|brings'
NOUNS='approach|philosophy|practice|method|process|focus|strategy|framework|expertise|team'

# Catches patterns 1, 2, 3 above
PATTERN_JAY="Jay( Chang)? ($VERBS)|Jay&apos;s ($NOUNS)|Jay's ($NOUNS)"

# We-voice pattern: catches Jay-voice copy that lapsed into corporate "we".
# Specific to phrases that almost always indicate Jay speaking
# ("common mistakes we see", "we hear from clients"), not Farther-platform
# or team references which are legitimate per voice rules.
PATTERN_WE='common (mistakes?|questions?|issues|problems|challenges) we (see|hear)|we (see|hear) (this|it) (often|frequently|every|all|constantly)|we (hear|see) from (clients|every)'

# Run grep, filter out legitimate exceptions
RESULTS=$(grep -rnE "($PATTERN_JAY|$PATTERN_WE)" src/ 2>/dev/null \
  | grep -v "with Jay" \
  | grep -v "Schedule.*Jay" \
  | grep -v "talk.*Jay" \
  | grep -v "@type.*Person" \
  | grep -v 'name: .Jay' \
  | grep -v 'alt=.Jay' \
  | grep -v '/disclosures/' \
  | grep -v 'data-' \
  | grep -v 'Alex.*Jay' \
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
