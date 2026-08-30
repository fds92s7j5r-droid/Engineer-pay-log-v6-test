Engineer Pay Log — Paywall Sandbox Preview 2
Date: 2026-08-30

Purpose:
- Corrects the post-checkout confirmation message after an expired/read-only user re-subscribes.
- First-time subscribers who still have trial time continue to see the trial-preserved message.
- Expired/read-only users who pay $5 now see “Full access restored,” with the next billing date.
- Service-worker cache version bumped to Preview 2.

Backend status at handoff:
- Sandbox $5/month subscription flow tested.
- No-card 30-day trial tested.
- Trial subscription preserves remaining free time.
- Customer portal tested.
- Cancellation at period/trial end tested.
- Read-only enforcement/history/export behavior tested.
- Re-subscription charged $5 immediately and restored active access.
- Production paywall enforcement remains OFF.
