# GreenGift Engineering Guide

This file is the project-wide operating guide for coding agents and contributors.
The repository is the source of truth. Inspect the implementation before changing
architecture or describing a feature as complete.

## Project Snapshot

GreenGift is a sustainable gardening and eco-gifting storefront for plants, pots,
seed balls, tools, and related products. The repository currently contains a
working frontend shell and an unimplemented backend scaffold.

### Verified stack

- **Frontend framework:** Next.js `16.2.11`, App Router entrypoint
- **UI runtime:** React `19.2.4`
- **Language:** TypeScript in `frontend/`; JavaScript/CommonJS scaffold in `backend/`
- **Styling:** Tailwind CSS `4` through `@tailwindcss/postcss`
- **UI libraries:** Lucide React, React Icons, Framer Motion, Base UI, shadcn metadata
- **Client routing:** React Router `7.18.1` in the existing application shell
- **Backend intent:** Express `5`, with dependencies for MongoDB/Mongoose, JWT,
  bcrypt, uploads, email, payments, Cloudinary, and Axios
- **Package managers:** npm, using the checked-in `package-lock.json` in each package
- **Deployment:** Not configured or verified in this repository

Do not document MongoDB, authentication, payment processing, AI services, or
production deployment as operational. Their dependencies and folders are present,
but the backend implementation files are currently empty scaffolds.

## Repository Layout

```text
.
├── AGENTS.md
├── README.md
├── backend/
│   ├── controllers/       Empty controller scaffold
│   ├── middleware/        Empty middleware scaffold
│   ├── models/            Empty model scaffold
│   ├── routes/            Empty route scaffold
│   ├── services/          Empty service scaffold
│   ├── utils/             Empty utility scaffold
│   ├── app.js             Empty Express app scaffold
│   ├── server.js          Empty server scaffold
│   └── package.json
└── frontend/
    ├── src/app/           Next.js layout, entrypoint, and placeholder API route
    ├── src/components/    Shared layout, home, product, auth, and chatbot UI
    ├── src/pages/         React Router page implementations
    ├── src/routes/        React Router route definitions
    ├── src/lib/           Constants, local product data, and utilities
    ├── public/            Static plant images
    ├── package.json
    ├── next.config.ts
    ├── postcss.config.mjs
    ├── components.json
    └── tsconfig.json
```

The more specific `frontend/AGENTS.md` also applies inside `frontend/`.
Follow both files; this root guide controls project-wide decisions.

## Architecture

### Frontend entrypoint and routing

- `frontend/src/app/layout.tsx` is the Next.js root layout.
- `frontend/src/app/page.tsx` is a Client Component and loads `src/App.tsx`
  dynamically with `ssr: false`.
- `src/App.tsx` mounts `BrowserRouter`.
- `src/routes/AppRoutes.tsx` owns the current application routes, layout shell,
  navbar, footer, chatbot, and route-level pages.
- Existing route paths include `/`, `/store`, `/about`, `/contact`, `/login`,
  `/login/user`, `/login/admin`, `/signup`, `/signup/user`, and `/signup/seller`.
- `next.config.ts` rewrites non-asset paths to `/`, allowing the client router to
  resolve them.

This is a deliberate transitional hybrid, not a standard Next.js App Router
application. Do not expand the React Router surface or add new parallel routing
systems. For new Next.js routes or a future migration, use `next/link`, `href`,
`usePathname`, `useRouter`, and App Router conventions. For existing components
inside `AppRoutes`, preserve `react-router-dom` APIs until the migration is
planned and completed consistently.

### Client/server boundaries

- Keep `src/app/layout.tsx` server-compatible.
- Keep browser-only APIs such as `window`, `document`, `localStorage`, and
  `navigator` in Client Components and, where appropriate, inside effects or
  event handlers.
- Do not import browser-dependent code into server-rendered modules.
- Use `dynamic(..., { ssr: false })` only when a dependency genuinely requires a
  browser environment. Do not use it as a blanket fix for ordinary components.
- Preserve the existing client-only boundary around `BrowserRouter` unless the
  routing architecture is intentionally migrated.

### Data, API, and state

- Product data currently comes from local frontend data and UI placeholders.
- `src/app/api/products/route.ts` is a placeholder Next.js API route.
- No verified frontend-to-backend API client exists yet.
- No state-management library is currently configured; do not claim Zustand or
  another store is in use.
- Do not add a global state solution for local component state.
- Keep business logic out of presentation components when introducing real API
  behavior; use focused services or route handlers with typed contracts.

### Authentication

- Login and registration pages currently provide UI flows with simulated manual
  success states; they are not connected to a verified backend.
- The Google button in `frontend/src/components/auth/GoogleAuthButton.tsx` reads
  `NEXT_PUBLIC_GOOGLE_AUTH_URL` and redirects to that URL.
- No Google OAuth callback, session persistence, password API, user database, or
  token verification is implemented.
- Public environment variables may contain URLs, but never put OAuth secrets,
  JWT secrets, passwords, database credentials, or API keys in frontend code.

### Backend

The backend package is CommonJS JavaScript and has dependencies for a planned
Express API, validation, auth, MongoDB, uploads, email, AI, and payments. The
following areas are scaffolding only: `app.js`, `server.js`, controllers, models,
routes, middleware, services, and utilities. Before implementing them, define
API contracts, error handling, authentication/session strategy, persistence,
validation, CORS, and observability rather than wiring isolated placeholders.

## Coding Standards

- Prefer TypeScript for new frontend code.
- Use meaningful names and focused components/functions.
- Reuse existing components and utilities before creating duplicates.
- Keep business logic separate from UI where practical.
- Avoid unnecessary dependencies and configuration changes.
- Do not create monolithic components or broad unrelated refactors.
- Add comments only for non-obvious decisions or complex logic.
- Remove temporary debugging output before finishing. Do not add `console.log()`
  to production paths unless it is intentional and documented.
- Preserve existing emerald/teal botanical branding, responsive behavior, and
  accessible form states.
- Use semantic HTML, labels, keyboard-accessible controls, visible focus states,
  and useful loading, empty, and error states.
- Use existing icon libraries instead of hand-drawn replacement icons.

## Next.js Rules

- Inspect the installed Next.js documentation in `frontend/node_modules/next/dist/docs/`
  when an API or behavior is uncertain.
- Use the App Router for Next.js-owned routes.
- Use `next/link` with `href` for new Next.js navigation.
- Use React Router links/hooks only within the existing client router shell.
- Use `"use client"` only for state, effects, event handlers, or browser APIs.
- Do not convert the whole app to Client Components to hide an SSR problem.
- Check third-party packages for browser access during module initialization.
- Preserve the configured rewrites unless a routing change requires updating them.

## Environment and Secrets

No environment example file is currently present. Before adding one, inspect all
call sites and document variable names without values. Local frontend OAuth setup
uses:

```env
NEXT_PUBLIC_GOOGLE_AUTH_URL=http://localhost:5000/api/auth/google
```

This URL is only a configuration hook; the backend route does not currently exist.
Use `.env.local` for local values and keep environment files ignored. Never commit
secrets or print them in logs, test output, or agent responses.

## Commands and Validation

Run commands from the package directory that owns them. Use only scripts that
exist in the relevant `package.json`.

### Frontend

```bash
cd frontend
npm install
npm run dev
npm run build
npm run start
```

There is currently no frontend `lint` or `test` script. Do not report lint or test
success unless a real command has been added and executed. Run the narrowest useful
check after each change, then run `npm run build` for meaningful frontend changes.

### Backend

```bash
cd backend
npm install
npm test
```

The current backend test script is a placeholder that exits successfully without
running tests. Do not treat it as backend verification. There are no verified
backend `dev`, `start`, lint, or integration-test scripts yet.

## Debugging Workflow

1. Read the complete error, including the first application-owned frame.
2. Identify the owning file and the actual execution path.
3. State one falsifiable root-cause hypothesis and a focused check.
4. Make the smallest targeted fix.
5. Run the narrowest relevant validation immediately.
6. Check for related failures from the same root cause.
7. Report changed files, validation output, remaining limitations, and status.

For `document is not defined`, inspect the server/client boundary, module-level
browser access, third-party initialization, dynamic imports, and the hybrid
React Router/Next.js boundary before changing routing or disabling SSR.

## Change and Git Discipline

Before major work, inspect the current status and branch when Git is available.
Preserve unrelated user changes. Never run destructive operations without explicit
permission, including:

- `git reset --hard`
- `git clean -fd`
- force pushes
- branch deletion
- history rewriting

Do not commit automatically. At completion, suggest a concise commit message, for
example `fix: align client navigation with the Next.js shell`.

## Documentation and Daily Tracking

Maintain these files as project work becomes meaningful:

- `docs/DEVELOPMENT_LOG.md`: append one dated entry per development day; never
  rewrite history except to correct a factual error.
- `docs/TODO.md`: keep High Priority, Medium Priority, Low Priority, and Bugs
  sections; mark completed work rather than silently deleting it.
- `docs/ARCHITECTURE.md`: update only when the architecture, API contracts,
  authentication, persistence, deployment, or major data flow changes.

At the beginning of a session, read the existing development log before planning.
At the end of a meaningful session, record only verified work. Use status terms
such as `Planned`, `In Progress`, `Implemented`, `Tested`, `Verified`, `Blocked`,
and `Known Issue`.

A development-log entry should use this shape:

```markdown
# Development Progress

## Day NN — YYYY-MM-DD

### Goal

### Completed

### Technical Changes

### Bugs Fixed

### Testing

### Current Status

### Remaining Work

### Next Session
```

If the `docs/` tracking files do not exist, create them before a task that needs
daily tracking, using the actual repository state as the first entry. Do not claim
that an API, authentication flow, database, deployment, or test is verified unless
it was actually exercised.

## Definition of Done

Before finishing a substantial task:

- The implementation is complete or the blocked portion is clearly documented.
- Relevant errors are fixed or recorded as known issues.
- The narrowest relevant validation and available build check have run.
- `docs/TODO.md` and `docs/DEVELOPMENT_LOG.md` reflect verified progress when
  those tracking files exist or the task requires creating them.
- No unrelated files were changed.
- No secrets were exposed.
- The final report states what changed, why, files touched, validation results,
  current status, remaining work, and a suggested commit message.
