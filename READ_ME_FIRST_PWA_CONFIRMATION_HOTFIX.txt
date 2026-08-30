Engineer Pay Log — Production Hotfix: iPhone Home Screen Confirmation Handoff
Date: 2026-08-28

Purpose:
Prevent existing iPhone Home Screen/PWA users from thinking their local shifts disappeared when an email-confirmation link opens in a separate Safari window.

Changes:
- Signup records whether meaningful existing local Engineer Pay Log data was present on the device.
- The Check Email screen explicitly tells existing Home Screen users to return to the Home Screen app after confirming.
- If confirmation opens in a fresh browser context that cannot see the local time book, a dedicated "Your account is confirmed" handoff screen tells the user to leave that browser window and sign in from the original Home Screen app/browser.
- The fresh confirmation browser does NOT proceed into empty-account setup for that migration case.
- Once the original local time book is connected, the account is marked migrated so future fresh devices use the normal cloud download flow.
- No change to the proven explicit "Connect This Time Book" consent step.

Deploy to the current Cloudflare Pages project. Because engineerpaylog.com and cloudtest.engineerpaylog.com now point to the same Pages project, a production deployment updates both hostnames.
