EPL V11 Test 4B — consolidated regression with GO 203 fresh-sign-in initialization hotfix.
Source: previously prepared Test 4A regression package. Test 4A has NOT been user-tested.
Changed: call accountPostStartupLoads(true) after account gate closes in password recovery, manual sign-in, and account creation paths. Changed SW registration version and SW cache identifier.
Unchanged: Test 4A fatigue/HOS disclaimer and all V11 features; no payroll formula changes.
Upload index.html and service-worker.js to the root of GitHub testing repository.
First regression: fresh Chrome Incognito sign-in to existing test account, no restart, Job 293 on 2026-11-11 must use GO 203; Job 293 on 2026-11-08 must use GO 202. Then perform full Test 4A checklist.
Note: fresh sign-in tested in previous hotfix; new-account creation is code-patched but not confirmed by that test.
