Engineer Pay Log V8.3.1 — Sept. 8 Crew Book Audit Patch
Date: 2026-08-28

SOURCE OF TRUTH / BASE BUILD:
Engineer_Pay_Log_V8_3_1_MEAL_UNDER_6_HOTFIX

This build preserves the Meal Under 6 Hours hotfix and all newer cloud/onboarding/PWA files from that package.

Crew Book changes manually verified against GO 202 Revision 7 effective 2026-09-08:
- Corrected Rev. 7 records: 11, 87, 108, 127, 128, 132, 134, 135, 233, 238, 239, 240, 241.
- Added missing passenger Job 43 (effective since 2026-05-26): Port Jefferson, 13:36-19:39, Sat/Sun relief, no weekend assignment, no automatic meal.
- Corrected day-specific Rev. 7 release logic for Jobs 134, 233, and 241.
- No changes made to the Rev. 7 relief-crew mapping table.

Meal Under 6 Hours behavior remains active: a passenger assignment under 6:00 will not automatically check Pays Meal Period even if its crew-book meal marker would otherwise qualify it.
