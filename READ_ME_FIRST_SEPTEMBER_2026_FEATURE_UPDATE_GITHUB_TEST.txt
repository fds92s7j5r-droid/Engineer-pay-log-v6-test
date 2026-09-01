ENGINEER PAY LOG — SEPTEMBER 2026 FEATURE UPDATE — GITHUB TEST

BASE
- Final GO 202 Revision 7 + Paper Revision 8 candidate.
- Revision date gate remains September 8, 2026.

NEW FEATURES
1. Job Comparison — merged from the completed held development build and rebased onto the current paywall + Rev. 7/Paper Rev. 8 baseline.
2. Quick Job Lookup — new lightweight single-assignment date-aware Crew Book summary.
3. Normal What's New update replaces the temporary Message from the Developer popup.

CREW BOOK UX CLEANUP
- Failed, abolished, or no-active-schedule Crew Book lookups now clear the prior Crew Book-populated location/start/release/meal fields before showing the warning. The typed date and assignment remain in place.

WHAT'S NEW MESSAGE
- Announces Job Comparison and Quick Job Lookup.
- States that every engineer assignment revised for the September 8 revision was manually reviewed.
- States that the Paper Revision published to Comply365 on August 31 was incorporated and manually checked.

RECOMMENDED MANUAL TESTS
A. Stale-field fix: fill Job 329 on Sept. 10, change to Sept. 12, Fill from Crew Book. After the no-active-Saturday alert, location/start/release/meal should be blank while date and Job 329 remain.
B. Quick Job Lookup: Job 293 on Fri Sept. 11, Sat Sept. 12, Sun Sept. 13 should show 11:46 PM / 12:07 AM / 12:22 AM releases respectively.
C. Quick Job Lookup: Job 18 Sept. 8 should show abolished; Job 203 Sept. 8 should show 9:00 PM–5:00 AM.
D. Job Comparison: compare Jobs 293, 329, and 115 for Sept. 10 and confirm cards render, swipe, date-aware source labels, relief info, and earnings.
E. What's New: confirm new September message appears once on a fresh/private test and Message from the Developer no longer appears.

DO NOT DEPLOY TO CLOUDFLARE UNTIL THESE MANUAL TESTS PASS.
