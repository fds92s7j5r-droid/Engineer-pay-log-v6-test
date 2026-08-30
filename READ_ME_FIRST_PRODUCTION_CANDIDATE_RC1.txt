ENGINEER PAY LOG — CLOUD PRODUCTION CANDIDATE RC1

Date: 2026-08-27
Base: Cloud Onboarding Test 6B (all focused Test 6B checks passed live on cloudtest)
App version: 8.3.1

PURPOSE
- Frozen cloud production candidate for final smoke testing.
- Deploy to https://cloudtest.engineerpaylog.com first.
- If the smoke test passes, deploy this SAME ZIP unchanged to engineerpaylog.com.

IMPORTANT PORTABILITY CHANGE
- Signup confirmation now uses window.location.origin instead of a hard-coded cloudtest callback.
- Therefore confirmation returns to cloudtest while testing there and to engineerpaylog.com after production cutover.
- Password recovery already uses the active window origin.
- Supabase redirect allow-list must continue to include both cloudtest and production during the cutover.

CARRIED FORWARD / ALREADY VERIFIED
- Hosted Supabase Auth / RLS / cloud sync and existing-local-data migration.
- Branded migration consent modal with safe Not Now behavior.
- Preserved employment-start-date welcome.
- First-run onboarding and interactive six-step pre-signup demo.
- User-created 19-shift realistic demo dataset with date-normalized time-slip chronology.
- Paid Sick Day demo entry (no unpaid sick shifts).
- Demo backup reminder suppressed.
- Existing-user reassurance shown only when meaningful local data exists.
- Tour Step 6 revised copy.
- Miscellaneous Instruction preserves start and release times regardless of pay category.
- Trainee pay extra does not prompt for a time slip.
- Branded Save as Favorite and + Create Favorite modal flows.

FINAL SMOKE TEST — DO NOT REPEAT DEEP INFRASTRUCTURE TESTS
1. Fresh InPrivate: onboarding loads and no existing-user yellow reassurance appears.
2. Explore Demo: realistic dataset loads; Demo Mode banner works; exit returns to auth.
3. Create Account and Sign In routes render with Turnstile.
4. Sign in to a preserved test account with no local migration data; cloud history loads and Sync Status reaches Up to date automatically.
5. Sign out and verify return to account gate.
6. Confirm no obvious layout or navigation regression on Dashboard, History, Settings, and Add Shift.

CUTOVER RULE
- Do not add new features to RC1.
- If RC1 smoke passes, use this exact package for the root-domain deployment.
- Time Slip Center cloud enhancements begin only after successful cutover.
