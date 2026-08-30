ENGINEER PAY LOG — CREW BOOK ASSISTANCE AUDIT TEST
GO 201 Rev. 6 + GO 202 Rev. 7 (effective September 8, 2026)

TEST BUILD — NOT YET DESIGNATED PRODUCTION.

WHAT WAS AUDITED
- Rechecked the remaining GO 201 Rev. 6 discrepancy list against the official Crew Book and active resolver logic.
- Preserved the user-confirmed Rev. 6 Job 277 mapping: Saturday report 2:19 AM; Sunday report 2:29 AM.
- Audited GO 202 Rev. 7 from the official FULL BOOK - Sept. 8, 2026 source rather than trusting the app's prior Rev. 7 override table.
- Audited standard passenger report/release branches, after-midnight weekday/weekend branches, meal flags, Extra Crew assignments and Relief Crew maps.
- Used train-number families as a cross-check for after-midnight weekday/weekend interpretation where applicable.

IMPORTANT SYSTEMIC REV. 7 FINDING
The previous Rev. 7 dataset was constructed from the original raw Rev. 6 table, not the audited Rev. 6 table. That allowed previously corrected values to reappear in Rev. 7 when a job did not have a separate Rev. 7 override. A separate Rev. 7 audited layer now corrects the official GO 202 values without changing the verified Rev. 6 layer.

REV. 7 STANDARD-PASSENGER CORRECTIONS
The audit corrected official GO 202 data/branch logic for 26 standard passenger jobs:
10, 13, 14, 32, 42, 53, 113, 161, 165, 181, 182, 191, 200, 271, 273, 275, 277, 293, 316, 328, 343, 344, 349, 354, 356, 359.

REV. 7 EXTRA CREW CORRECTIONS
The prior Rev. 7 build omitted the western Extra Crew assignments entirely. Added/verified:
61, 62, 63, 68, 69, 71, 72, 73, 74, 77.
Also reverified 363-370 and 380-382.
Date-limited rules are encoded, including Job 73's October 16-November 6 release change.

REV. 7 RELIEF CREWS
All 49 Relief Crew maps (401-476 as printed) were transcribed/compared against official GO 202 pages 134-135. Result: 49/49 matched the app's Rev. 7 relief map; no relief-map correction was required.

AUTOMATED CHECKS
- Combined Rev. 6 / Rev. 7 targeted regression: 114 cases, 0 failures.
- Rev. 7 Extra Crew date/branch regression: 28 cases, 0 failures.
- Rev. 7 Relief Crew map comparison: 49 maps, 0 mismatches.
- Rev. 7 standard-passenger source-candidate comparison across representative weekday/Friday/Saturday/Sunday dates: 0 unresolved report/release mismatches after corrections.
- JavaScript syntax checks: index.html PASS; demo.html PASS; service-worker.js PASS.

SUGGESTED MANUAL HIGH-RISK TESTS
Rev. 7 dates (September 8 or later):
- Job 14: Friday / Saturday / Sunday releases
- Job 181 and 182: Friday / Saturday / Sunday releases
- Job 200: Friday / Saturday / Sunday releases
- Job 271: September 8 plus Saturday / Sunday
- Job 277: Saturday and Sunday should BOTH release 2:29 AM in GO 202
- Job 293: Friday / Saturday / Sunday
- Job 356: Friday / Saturday / Sunday
- Extra Crew 61 on Tue Sep 8 and a later Monday
- Extra Crew 73 on Fri Oct 9 versus Fri Oct 16
- Relief Crew 474 as a spot check

Rev. 6 remains date-isolated and should continue to resolve its verified pre-September-8 values.
