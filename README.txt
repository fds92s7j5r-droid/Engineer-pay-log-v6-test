EPL V11.0 TEST 1G — Relief-Day Fatigue Type
Based on accepted Test 1F.
Upload index.html and service-worker.js to GitHub testing.
Change: a GO 203 published daily 'R' code now resolves to the job's published weekly Type 1/2, because R marks the regular owner's relief day. Explicit daily Type 1/2 remains authoritative; blank '-' and unknown jobs remain unclassified. Add/Edit Shift source notes when weekly fallback was used. Existing fatigue manual override restrictions, GO effective-date boundary, display toggle, and Test 1E progressive trim rendering remain.
IMPORTANT: This lookup does not establish that a job actually operated on an R day; confirm a real relief coverage assignment before treating the classification as worked.
Suggested checks:
1. Job 113 Mon 2026-11-09 shows Type 2 and weekly fallback source.
2. Job 99 Mon 2026-11-09 shows Type 1 (daily code).
3. Job 99 Tue 2026-11-10 shows Type 1 (weekly fallback).
4. Job 361 Mon 2026-11-09 stays unclassified (blank).
5. Unknown job stays unclassified; GO 202 date stays unclassified.
6. Save actual relief coverage shift: Dashboard, History List/Calendar badge.
7. Fatigue toggle OFF/ON, override restrictions, and Trim Assistant regression.
