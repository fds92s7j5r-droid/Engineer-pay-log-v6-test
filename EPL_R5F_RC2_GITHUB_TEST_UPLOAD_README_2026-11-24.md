# Engineer Pay Log — R5F RC2 (GitHub test candidate only)

Built from the previously prepared R5F RC1 GitHub test candidate, which itself is based on verified R5E production. **No production or Supabase changes have been made by this packaging.**

## Difference from RC1

- Added one official-image crop per GO 203 Engineer Fatigue Relief Job (24 JPEGs), created from the exact original five-page November 9 bulletin.
- Image viewer is the same zoomable Crew Book viewer used for regular jobs, in Quick Job Lookup and the job comparison official-assignment modal.
- Lazy loads a single image only after the user opens it; repeat viewing uses a dedicated same-origin image cache. Does not download all 24 images at startup.
- Original official five-page PDF remains in root and linked for each job.
- The displayed crop is suppressed if an effective-dated fatigue relief revision exists but no current revision image is provided, to avoid presenting stale artwork as official.
- Updated service-worker cache version and What's New copy. RC1 fatigue schedule/compensation logic and withdrawn bulletin status behavior otherwise unchanged.

## Important iPhone / GitHub upload guidance

A ZIP committed to GitHub is **not** automatically extracted into the site.
If the GitHub test repository already has the complete R5E baseline, only these candidate paths need to be updated/added:

**At the repository root:**
- `index.html`
- `service-worker.js`
- `go203_fatigue_relief_20261109.pdf` (unchanged from RC1; required unless already uploaded)

**Inside the existing `assets/crewbook/` directory:**
- 24 `go203_fatigue_*.jpg` images (full filenames appear in the manifest)

Do not place the 24 job JPEGs in the root; do not place the PDF in assets/crewbook.
The image manifest and this README are helpful for audit but are not required for the web app to operate.

## Verification on GitHub (do not promote to Cloudflare yet)

1. Open Quick Job Lookup for `EFJR1` on Tuesday November 24, 2026. Confirm schedule, no meal, non-ownable; expand 'View Official Fatigue Relief Assignment'. Verify the printed image matches the scheduled trains, and zoom + / - / 1× works.
2. Lookup weekend `EFNW3` on Saturday November 28, 2026; verify same. Verify inactive on weekdays.
3. Open a fatigue relief job in Job Comparison and select 'View Official Fatigue Relief Assignment'. Confirm its image loads into the existing modal.
4. Check another regular GO 203 job official image to ensure image-loading regression did not occur.
5. Check PDF link and that images open a second time. Test offline behavior only **after** the first download.
6. Check withdrawn bulletin simulation; **do not** attempt a live withdrawn-bulletin database write from GitHub testing.

## R5F RC1 unresolved prerequisite (unchanged)

The withdraw-status shared publication needs a database read function and developer-access verification before production. See the RC1 release handoff. **No live schema or function changes were executed.**

## Tests completed by this package

- All 24 image crops checked against source PDF heading/release and neighboring sections.
- 24 images and mapping keys/file paths validated; lazy `data-crewbook-lazy-src` and reveal path checked with JS unit tests.
- JavaScript syntax checked for extracted HTML inline scripts and service-worker.
- No live-browser smoke test possible inside the current execution environment; user GitHub test verification required.
- ZIP entry path/CRC and source artifact checks verified at package time.
