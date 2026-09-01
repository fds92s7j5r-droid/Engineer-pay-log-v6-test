Engineer Pay Log — GO 202 Rev. 7 + Paper Revision No. 8
FINAL PRODUCTION CANDIDATE
Built: 2026-09-01

SOURCE STACK
1) GO 202 Revision 7 — effective September 8, 2026
   - 173/173 delta-verifier records human-certified.
2) Paper Revision No. 8 — dated August 31, 2026; effective September 8, 2026
   - 11 listed crew changes applied as the final superseding layer.

PAPER REVISION 8 CREWS
14, 28, 108, 113, 157, 165, 270, 356, 357, 367, 370

MODELED USER-FACING CHANGES
- Job 28: Mon-Fri meal status updated from paper meal-dot instruction.
- Job 108: Mon-Fri meal status explicitly preserved as pays-meal after meal-dot removal.
- Job 113: Mon-Fri report 5:01 PM; report location Penn Station.
- Job 157: Sat-Sun release 6:56 PM.
- Job 165: paper note resolves the starred branch as Friday Report Only:
  Mon-Thu release 1:08 AM; Friday release 10:52 PM.
- Job 356: Saturday release 1:47 AM remains the starred Saturday-only branch.
- Job 367: Saturday-only report Hempstead 5:35 PM; release 1:41 AM.
- Job 370: Sunday-only report Penn Station 6:06 PM; release 1:38 AM.
- Jobs 14, 270, and 357 contain movement/coverage changes that do not alter the
  current app's report/release/meal/location fields. Those instructions are retained
  in the paper-revision overlay metadata for future assignment-detail features.

DATE GATE
- Through September 7, 2026: GO 201 Rev. 6 remains active.
- Beginning September 8, 2026: GO 202 Rev. 7 + Paper Rev. 8 is active.

CACHE
- Service-worker cache bumped so production clients fetch the new build.

TEST STATUS
- JavaScript syntax: PASS in index.html and demo.html.
- Existing Rev. 7 regression: 865/865 PASS in index.html.
- Existing Rev. 7 regression: 865/865 PASS in demo.html.
- Paper Rev. 8 focused schedule assertions: 19/19 PASS in index.html.
- Paper Rev. 8 focused schedule assertions: 19/19 PASS in demo.html.

MANUAL TEST BEFORE CLOUDFLARE
Recommended:
Job 28 weekday meal; Job 113 weekday report/location + Friday release;
Job 157 weekend release; Job 165 Tuesday vs Friday;
Job 356 Saturday/Sunday; Job 367 Saturday; Job 370 Sunday.
