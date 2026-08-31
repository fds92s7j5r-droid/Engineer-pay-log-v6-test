ENGINEER PAY LOG — GO 201 REV. 6 FULL HUMAN-CERTIFIED CREW BOOK PATCH
Date: 2026-08-31

PURPOSE
This production candidate updates the live Engineer Pay Log paywall build so Crew Book Assistance uses the completed 56/56 human-certified GO 201 Revision 6 exception re-certification.

SOURCE OF TRUTH
Crew_Book_GO201_Rev6_EXCEPTION_RECERT_FINAL_56_OF_56_358_RELIEF_CONFIRMED.json
SHA-256: 50a145705dc54e1bcb8aec16dd724244bfff771f3631ea7fcc367466b6f4c4d8

FINAL JOB 358 RELIEF CONFIRMATION
- Thursday: Relief Crew 420
- Friday: Extra Crew
This post-export correction was confirmed by the developer and matches the production relief map.

SCOPE
- 56/56 certified Rev. 6 exception jobs are applied to the Rev. 6 audited layer.
- Certified base report/release, terminal, relief days, weekday/weekend meal status, and day/date exceptions are represented.
- Rev. 6 relief coverage was checked against the certified records.
- Existing billing/paywall/cloud behavior is preserved.
- GO 202 Rev. 7 data/resolver logic is intentionally NOT changed by this patch.
- Labor Day H-assignment logic is intentionally NOT changed.

CACHE
Service-worker cache bumped to:
engineer-pay-log-v8-3-1-rev6-certified-20260831

IMPORTANT NEXT STEP
The app already contains a separate draft GO 202 Rev. 7 branch with an effective switch of 2026-09-08. This patch leaves that branch untouched. Audit/finalize the next revision before its effective date.

MANUAL SPOT CHECKS RECOMMENDED BEFORE CLOUDFLARE
1. Job 14 — Sunday 2026-08-30: report 9:18 PM, release 6:42 AM, meal No.
2. Job 18 — Thursday/Friday: report 2:09 PM, release 1:20 AM, meal No.
3. Job 47 — Friday 2026-08-28: report 9:35 AM, release 6:26 PM, meal Yes.
4. Job 52 — Friday 2026-08-28: report 2:47 AM, release 6:31 PM, meal No.
5. Job 127 — Monday/Tuesday: report 12:10 AM, release 9:10 AM, meal No.
6. Job 352 — Saturday: 5:12 PM–1:46 AM, meal No; Sunday: 5:12 PM–1:47 AM, meal Yes.
7. Job 358 — Thursday covered by Relief Crew 420; Friday Extra Crew; Saturday release 1:52 AM; Sunday release 2:12 AM.

See REV6_FULL_HUMAN_CERTIFIED_REGRESSION_REPORT_2026-08-31.txt for automated validation details.
