Engineer Pay Log - Labor Day 2026 Crew Book Assistance TEST BUILD
Built from: V8.3.1 Rev6 Verified / Rev7 Full Audit production baseline
Date: 2026-08-29

Scope:
- Labor Day 2026 only (Monday, Sept. 7, 2026).
- Uses GO 201 Rev. 6 Holiday Crew tables H-2 through H-6.
- H assignments normalize with or without dash/spaces/case: H-179 = H179 = h 179.
- Numeric regular/relief crew input on Labor Day maps to its published H assignment.
- H assignments resolve to the SUNDAY variant of the underlying weekend job.
- Published '+' / To Be Assigned H assignments are intentionally treated as OFF for Labor Day 2026 per developer decision.
- Explicit Off crews in the reverse holiday table: 18, 43, 151.
- Blank/unmapped regular crews are NOT silently treated as Off; Crew Book Assistance reports no published Labor Day assignment.
- Guaranteed Extra List and Collector holiday tables are intentionally out of scope.

Recommended high-risk manual tests:
1. Date 2026-09-07, enter Crew 180 -> should route to H-179 and use Job 179 SUNDAY variant.
2. Date 2026-09-07, enter H179 and H-179 -> same result.
3. Date 2026-09-07, enter Crew 474 -> H-271, Sunday variant of Job 271.
4. Date 2026-09-07, enter Crew 271 -> H-277, Sunday variant of Job 277.
5. Date 2026-09-07, enter H-354 -> treated as Off (+ in source table).
6. Date 2026-09-07, enter H369 -> treated as Off (+ in source table).
7. Date 2026-09-07, enter Crew 18 or 43 or 151 -> explicitly Off.
8. Date 2026-09-07, try H179 capitalization/dash/spacing variants.
9. Confirm a non-holiday date still behaves exactly as before.
10. Confirm Sept. 8, 2026 still uses GO 202 Rev. 7 and is not affected by Labor Day routing.
