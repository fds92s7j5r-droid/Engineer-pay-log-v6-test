Engineer Pay Log V8.3.1 — Meal Under 6 Hours Hotfix
Date: 2026-08-28

Starting point:
Engineer_Pay_Log_V8_3_1_CLOUD_HOTFIX_PWA_CONFIRMATION_HANDOFF

Change made:
Crew Book Assistance no longer automatically checks "Pays Meal Period" when a passenger Crew Book assignment is less than 6:00 long, even when that assignment would otherwise automatically pay a meal because it has no dot in the Crew Book.

Boundary behavior:
- 5:59 or less + no dot / normal auto-meal eligibility: no automatic meal.
- Exactly 6:00: existing Crew Book meal logic remains in effect.
- More than 6:00: existing Crew Book meal logic remains in effect.
- Existing dotted-job behavior is unchanged.
- Manual Meal Period claims remain available; this hotfix changes only the automatic Crew Book meal selection.

PWA cache:
The service-worker cache name was bumped so deployed devices can receive the corrected index.html instead of continuing to use the prior cached shell.

Suggested phone test after deployment:
1. Open Add Shift and use Crew Book Assistance on a known no-dot job under 6:00.
2. Confirm the start/end times still fill correctly.
3. Confirm "Pays Meal Period" is NOT automatically checked.
4. Test a no-dot job of 6:00 or longer and confirm its existing meal behavior is unchanged.
