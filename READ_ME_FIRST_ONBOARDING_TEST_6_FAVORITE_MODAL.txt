Engineer Pay Log — Cloud Onboarding Test 6
FINAL FAVORITE-JOB UI POLISH

Base:
- Carries forward finalized Test 5 realistic 19-shift demo dataset.
- Carries forward Test 4 Miscellaneous Instruction time-entry and trainee-pay Time Slip warning fixes.
- Carries forward Test 3B tour step 6 copy.

New in Test 6:
- Replaces the browser-native “Name this favorite job:” prompt used by Save as Favorite with a branded Engineer Pay Log modal.
- Favorite name defaults to the assignment/job number when available.
- Supports Enter to save and Escape/Cancel to close.
- Empty names stay in the modal and show an inline validation message.
- No browser-native success alert is shown after saving.
- The same branded modal is included in both the real app and public Demo Mode.

Focused live checks on cloudtest:
1. Open an existing shift and choose Save as Favorite.
2. Confirm the branded modal opens with the assignment pre-filled.
3. Cancel and confirm nothing is saved.
4. Re-open, rename if desired, Save Favorite, and confirm it appears under Saved Jobs.
5. Confirm Miscellaneous Instruction still accepts Start Time and Actual Release Time regardless of pay category.
6. Confirm trainee-pay extra does not trigger a Time Slip warning.

Important:
- Deploy to engineer-pay-log-cloudtest only for validation.
- Do not cut over engineerpaylog.com until the final production-readiness pass is complete.
