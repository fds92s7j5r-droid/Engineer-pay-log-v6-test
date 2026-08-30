Engineer Pay Log — Cloud Onboarding Test 5
REALISTIC USER-CREATED DEMO DATA — FINALIZED SOURCE DATA

Base:
- Carries forward Test 4 minor entry polish.
- Carries forward Test 3B tour step 6 wording.

New / finalized in Test 5:
- Uses the user's latest 19-shift Demo Data Builder JSON backup as the source of truth.
- Includes the user's two Saved Jobs (11 and 276).
- Preserves Paid, Denied, and Pending Time Slip examples from the latest backup.
- Demo dates are normalized into the visitor's current calendar month.
- Time Slip Written / Submitted / Paid-or-Denied dates move by the identical day offset as their parent sample records, preserving the original chronology.
- Manual demo-only correction requested by the user: H-293 is displayed as 293 and its Holiday flag is removed before date normalization.
- Preserves realistic assignments, times, locations, crew-name placeholders, claims, notes, special shifts, and pay flags.
- Backup reminder remains suppressed in public Demo Mode.
- Demo storage remains isolated from real Engineer Pay Log storage.

Important:
- The public demo resets its changes when the visitor leaves/reloads.
- Live engineerpaylog.com production root is NOT modified by this package.
- Deploy only to engineer-pay-log-cloudtest for validation first.
