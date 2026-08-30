ENGINEER PAY LOG — GO 201 REV. 6 HUMAN-CERTIFIED PRIORITY HOTFIX
Build date: 2026-08-29
Base: Engineer_Pay_Log_V8_3_1_LABOR_DAY_2026_PRODUCTION(2).zip
Human-certified source SHA-256: 11faedee06f66aeb5751b1295bd043319caf976dbba51c1bd8b41b71a551f8ad
Source schema: epl-crew-revision-verifier-v2
Certified priority jobs: 9, 12, 51, 134, 161, 200, 216, 293, 358

AUTHORITY RULE
The user-certified structured JSON is the authority for these nine Rev. 6 records.
This build does not reinterpret certified values from the PDF.

Applied operational fields:
- terminal/location
- relief days
- relief crew vs Extra Crew coverage on certified relief days
- Mon-Fri base report/release/meal
- Sat-Sun base report/release/meal or no weekend portion
- certified day-specific report/release exceptions
- Job 51 Friday-only 12:41 PM release note retained as current Friday-only resolver behavior

Important certified examples:
- Job 200: Mon-Thu 4:20 PM–1:07 AM, Fri release 12:25 AM; weekday meal No; weekend meal Yes.
- Job 293: weekday meal Yes; weekend meal No; Fri release 11:46 PM; Sunday release 12:22 AM.
- Job 358: Thu relief = Crew 420; Fri relief = Extra Crew; weekday meal No; weekend meal Yes;
  Sat report -> Sun release 1:52 AM; Sun report -> Mon release 2:12 AM.

Revision 7 constants/resolver were intentionally not modified by this hotfix.

FINAL USER CORRECTION BEFORE PRODUCTION
- Job 358: Thursday is covered by Relief Crew 420; Friday is covered by Extra Crew.
- Rev. 7 was intentionally not changed.
