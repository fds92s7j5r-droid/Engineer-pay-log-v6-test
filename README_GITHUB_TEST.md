# EPL Engineer Trainee Mode / Crew Book Assistance — GitHub Test R1
Date: November 17, 2026

## Purpose
Remove the trainee-only Crew Book Assistance restriction, so Engineer Trainees can use the same optional Crew Book autofill/lookup that is available in regular Engineer Mode. Trainee pay/rule behavior stays intact.

## Starting point
This **GitHub-only** test patch was based on the **previously accepted November General Pick Dashboard Shortcut Retirement R1 GitHub test** (which itself came from the current verified **GO 203 Cropping R1 production baseline**). The November General Pick button remains hidden in this test build. No production changes are included.

## Files for GitHub testing
- `index.html` — Crew Book assistance eligibility, toggle, and Settings visibility updated for trainees; prior General Pick shortcut retirement retained.
- `service-worker.js` — GitHub testing cache name bumped so the installed test PWA picks up the new version.
- `README_GITHUB_TEST.md` — instructions only. Do not upload this README to GitHub unless you wish to document the test.

Upload `index.html` and `service-worker.js` to the **EPL WEBSITE GitHub test repository**, NOT `epl-crew-cloud-probe`, and NOT Cloudflare production.

## Acceptance checks (GitHub test PWA)
1. In Settings, turn **Engineer Trainee Mode ON**; **Crew Book Assistance** toggle remains visible and can be switched ON or OFF.
2. With assistance ON, in Add Shift enter a date/job (e.g., November 17 / Job 113), tap **Fill from Crew Book**; expected date-appropriate start/end/terminal prefilled (editable). The Trainee Mode switch remains ON.
3. With assistance OFF, the Crew Book autofill control disappears and does not autofill; switch ON again, keeping the official Crew Book disclaimer/confirmation as needed.
4. Turn Trainee Mode OFF; normal Engineer Crew Book Assistance still works.
5. Trainee pay logic is unchanged; previous trainee shift records unchanged; historical Crew Book/GO203 Revision 2 cropped images still work.
6. The **November General Pick** dashboard shortcut is still absent, and unrelated Dashboard, Quick Job Lookup, Trim/Bid (trainee restrictions) still work normally.

## Safeguards
- Only assistance visibility/eligibility is changed; no trainee pay calculations, job resolvers, meal treatment, Roster automation or Cloudflare secrets are modified.
- Preserve explicit preference OFF for any user who disabled assistance. When unset, the existing ON default applies to both Engineer and Trainee Mode.
- Existing trainee restrictions on Trim Assistant and Bid Sheet Assistant are preserved.
- No Cloudflare deployment until the user confirms GitHub acceptance and any separate meal-pay report is assessed.
