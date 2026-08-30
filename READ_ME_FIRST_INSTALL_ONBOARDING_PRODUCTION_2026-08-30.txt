Engineer Pay Log — Install / Save to Home Screen Onboarding — Production Ready
Date: August 30, 2026

BASELINE
- Built from Engineer_Pay_Log_V8_3_1_REV6_HUMAN_CERTIFIED_PRIORITY_HOTFIX_FINAL_2026-08-29.zip.
- Promotes only the manually approved Install / Save to Home Screen onboarding from Test 3.
- Job Comparison remains held separately.
- Time Slip Assistance Preview 2.5 remains a separate test branch.

APPROVED BEHAVIOR
- Friendly first-use prompt explaining that Engineer Pay Log works best when installed/saved to the Home Screen.
- iPhone/iPad Safari-specific instructions.
- iPhone/iPad Chrome-specific instructions.
- Native Install App action on supported non-iOS browsers when the browser exposes a PWA install prompt.
- Already-installed/standalone PWA sessions suppress the onboarding automatically.
- Not Now permanently suppresses the automatic prompt on that browser/device.
- Settings -> Install Engineer Pay Log always retains manual install instructions.
- The prompt waits until sign-in/account gate and existing Engineer Pay Log modals are finished.
- Install wording correctly states that account data, saved shifts, and cloud sync are unchanged by installation.

MANUAL TESTS PASSED ON IPHONE — 2026-08-30
- Safari onboarding layout/instructions.
- Not Now dismissal persists after refresh.
- Settings install instructions remain available.
- Installed Home Screen app suppresses the prompt.
- Chrome on iPhone is detected and receives Chrome-specific instructions.

CACHE / SERVICE WORKER
- Production install-onboarding cache/version: 20260830.
- Navigation uses a network-first refresh with cached fallback to reduce stale app-shell behavior after deployments.

NO PAY, CREW BOOK, SHIFT CALCULATION, OR CLOUD-SYNC LOGIC WAS INTENTIONALLY CHANGED.
