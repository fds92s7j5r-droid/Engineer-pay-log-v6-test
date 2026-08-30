ENGINEER PAY LOG — PAYWALL SANDBOX PREVIEW 1
August 30, 2026

BASELINE
- Built from Engineer_Pay_Log_V8_3_1_INSTALL_ONBOARDING_PRODUCTION_READY_2026-08-30.zip.
- Production billing enforcement remains OFF in Supabase.
- Stripe integration is locked to the Engineer Pay Log sandbox/test price: $5/month.

IMPLEMENTED IN THIS PREVIEW
- 30-day no-card trial entitlement UI.
- Subscription status card in Settings.
- Stripe-hosted Checkout entry point.
- Stripe Customer Portal entry point.
- Checkout confirmation refresh after returning to the app.
- Read-only state preserves viewing/export but blocks add/edit/delete shift actions and saved-job write actions.
- Approved trial, reminder, subscription, and read-only copy integrated.
- Creator permanent complimentary entitlement is stored server-side.
- Billing entitlement is server-owned; browser clients cannot write their own paid status.

SUPABASE EDGE FUNCTIONS DEPLOYED
- ensure-billing-entitlement
- create-billing-checkout
- confirm-billing-checkout
- create-billing-portal
- stripe-billing-webhook

STRIPE SANDBOX
Product: Engineer Pay Log
Price: $5.00/month
Price ID: price_1UAEJKRzVRCPc2sOnba4rdTP
Webhook endpoint has been created in the Stripe sandbox for checkout/subscription/invoice events.

MANUAL SECRETS STILL REQUIRED BEFORE CHECKOUT TEST
In Supabase -> Edge Functions -> Secrets, add:
1) STRIPE_SANDBOX_SECRET_KEY
   Value: copy the sandbox sk_test_... secret key from Stripe -> Developers -> API keys.
2) STRIPE_SANDBOX_WEBHOOK_SECRET
   Value: open the sandbox webhook endpoint named "Engineer Pay Log sandbox billing entitlement webhook" and reveal/copy its whsec_... signing secret.

Do not use live Stripe keys for this preview.

TESTING
Use a non-creator/test Engineer Pay Log account to test the normal 30-day trial flow. The creator account intentionally reports permanent complimentary access and will not show the normal Subscribe flow.

DO NOT DEPLOY THIS ZIP TO PRODUCTION.
This is a sandbox/GitHub/Cloudflare-test package only. Production billing enforcement is intentionally OFF.
