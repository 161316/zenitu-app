# Threat Model

## Project Overview

Zenitu is a public-facing educational web app for children learning business concepts. The production application consists of a Vite/React frontend in `artifacts/gestao-kids`, an Express 5 API in `artifacts/api-server`, PostgreSQL via Drizzle in `lib/db`, and an Anthropic-backed tutoring integration in `lib/integrations-anthropic-ai`.

The backend uses server-side sessions stored in Postgres. Any internet user can register an account, access authenticated learning features, persist progress, and invoke the AI-assisted correction flow. TLS is provided by the platform in production. The mockup sandbox is development-only and should be ignored unless production reachability is later demonstrated.

## Assets

- **User accounts and sessions** — user identity, session cookies, password hashes, and admin status. Compromise enables account takeover and access to privileged features.
- **Learning progress and achievements** — XP, completed lessons, completed challenges, streaks, badges, and unlock state. This data drives product progression and admin reporting.
- **Administrative analytics** — aggregate usage metrics exposed by the admin panel. Integrity matters because business decisions depend on these numbers.
- **Password-reset capabilities** — reset tokens and account recovery emails. Abuse can enable account takeover or block user recovery.
- **Anthropic API access and budget** — the correction endpoint spends platform-managed AI credits and can affect service availability if abused.
- **Application secrets** — `DATABASE_URL`, `SESSION_SECRET`, Gmail app password, and Anthropic integration credentials.

## Trust Boundaries

- **Browser to API** — all frontend requests cross from an untrusted client into the Express API. The server must treat every field from the browser as attacker-controlled.
- **API to session store / database** — the API can read and modify user records, sessions, progress, and reset tokens. Injection or broken auth here directly affects all users.
- **Public to authenticated boundary** — password reset pages and account creation are public; progress, correction, and admin APIs must enforce session-based authorization.
- **Authenticated to admin boundary** — admin stats must be protected independently of frontend routing because the client is untrusted.
- **API to external email / AI services** — password reset mail and AI correction requests consume privileged outbound integrations that attackers may try to abuse for spam, credit burn, or denial of service.
- **Development to production boundary** — `artifacts/mockup-sandbox`, attached assets, and utility scripts are not production surfaces unless future deployment wiring proves otherwise.

## Scan Anchors

- **Production entry points:** `artifacts/gestao-kids/src/main.tsx`, `artifacts/gestao-kids/src/App.tsx`, `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`, `artifacts/api-server/src/routes/index.ts`.
- **Highest-risk areas:** `artifacts/api-server/src/routes/auth.ts`, `password-reset.ts`, `progress.ts`, `correction.ts`, `admin.ts`, plus `artifacts/gestao-kids/src/hooks/useAuth.ts` and `useProgress.ts`.
- **Public surfaces:** login/registration, forgot/reset password pages, `/api/healthz`, `/api/auth/register`, `/api/auth/login`, `/api/auth/forgot-password`, `/api/auth/reset-password`.
- **Authenticated surfaces:** `/api/auth/me`, `/api/progress`, `/api/correction` and most frontend pages.
- **Admin surfaces:** `/api/admin/stats` and `/admin`.
- **Usually dev-only:** `artifacts/mockup-sandbox`, `scripts`, generated client/spec outputs, `attached_assets/`.

## Threat Categories

### Spoofing

The application relies on Postgres-backed `express-session` cookies for identity. Protected API routes must reject requests without a valid session, and administrative actions must verify admin status server-side on every request. Password-reset flows must not leave compromised sessions alive after recovery, or an attacker with an existing session can continue impersonating the victim.

### Tampering

Because the browser is untrusted, the API must not accept client-asserted achievements, lesson completion, XP totals, streaks, or badge state as authoritative. Any progression, unlock, or reward logic that matters to the product must be derived or verified server-side from canonical data. Administrative analytics must also resist manipulation by normal users.

### Information Disclosure

Authenticated and admin responses must expose only the minimum data needed by the caller. Reset flows must avoid revealing whether an email exists, and logs must avoid leaking cookies, tokens, or other sensitive values. The mockup sandbox is out of scope for production disclosure analysis unless it becomes reachable from deployed traffic.

### Denial of Service

The public and low-friction routes are password reset and open registration; the highest-cost authenticated route is `/api/correction`, which calls Anthropic. Expensive or externally billed endpoints need tighter abuse controls than generic global rate limits so one user cannot exhaust credits or degrade service for others.

### Elevation of Privilege

The main privilege boundaries are anonymous user → authenticated user and authenticated user → admin. The server must enforce these boundaries independently of the frontend. Accepting attacker-controlled state for progression or recovery can also become privilege escalation when it unlocks restricted product capabilities or prevents an account owner from regaining exclusive control of their account.