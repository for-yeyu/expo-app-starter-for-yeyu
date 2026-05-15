# Expo App Starter

An Expo Router + React Query starter focused on clean layering for personal app projects.

## Runtime Requirements

- Node.js `>= 20`
- pnpm `>= 9`

## Common Commands

```bash
pnpm start
pnpm ios
pnpm android
pnpm web
pnpm typecheck
```

## Architecture Overview

```text
src/
  app/        # Expo Router route entries
  ui/         # Screen implementation and reusable UI
  api/        # Async data and request functions by domain
  hooks/      # Client-facing hooks, including React Query wrappers
  configs/    # Expo public env and app metadata
  lib/        # Infrastructure layer: http, errors, utilities
  styles/     # NativeWind global CSS entry
```

## Core Layering Rules

1. `src/app` stays route-focused.
2. Screen UI lives in `src/ui/app`.
3. Screens call hooks from `src/hooks`.
4. Hooks call functions from `src/api`.
5. Network requests go through `src/lib/http/fetch`.
6. Runtime config is consumed through `src/configs/client-env`.

## Documentation Index

- `src/app/README.md`: Expo Router entry-layer conventions
- `src/ui/README.md`: UI and screen organization
- `src/api/README.md`: API request layer rules
- `src/hooks/README.md`: Hook layer and React Query conventions
- `src/configs/README.md`: Expo public env boundaries
- `src/lib/README.md`: Infrastructure modules and change policy
- `src/styles/README.md`: NativeWind CSS entry rules
