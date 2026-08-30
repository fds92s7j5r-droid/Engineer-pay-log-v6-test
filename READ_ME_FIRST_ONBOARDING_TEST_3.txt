ENGINEER PAY LOG — CLOUD ONBOARDING TEST 3
August 27, 2026

Purpose
-------
Polish pass on the hosted interactive onboarding demo, based on the already-tested Cloud Onboarding Test 2 build.

Changes in this test
--------------------
1. Demo backup reminder removed
   - The dashboard “Time for a backup / No backup has been recorded on this device” banner is suppressed in Demo Mode.
   - Demo data resets when the visitor leaves, so a backup warning is not meaningful there.

2. Existing-user reassurance is now conditional in the demo intro
   - “Already use Engineer Pay Log on this device?” is hidden for genuinely fresh visitors.
   - It is shown only when the real browser contains meaningful pre-account Engineer Pay Log local data.
   - Demo sample data remains isolated in memory and cannot itself trigger this notice.

Carried forward unchanged
-------------------------
- Branded Connect This Time Book / Not Now migration modal.
- Explicit migration consent and safe Not Now behavior.
- Smarter migrated-user welcome flow with preserved employment start date.
- Interactive six-step demo tour.
- Paid Sick Day examples instead of Unpaid Sick sample entries.
- Cloud auth/sync foundation from the proven candidate.

Deploy to
---------
Cloudflare Pages project: engineer-pay-log-cloudtest
Test URL: https://cloudtest.engineerpaylog.com

Do NOT deploy this test package to the live engineerpaylog.com root domain.
