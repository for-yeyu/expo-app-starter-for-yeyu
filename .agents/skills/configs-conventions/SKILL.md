---
name: configs-conventions
description: Use when adding or updating Expo public env values or runtime config consumption patterns in src/configs.
---

# Configs Conventions

## Scope

Applies to `src/configs/**` and modules that consume runtime config.

## Structure

```text
scripts/
  validate-env.mjs
src/configs/
  client-env.ts
  index.ts
```

## Rules

1. Expo app env values must use `EXPO_PUBLIC_*`.
2. All env reads stay in `src/configs/client-env.ts`.
3. App code imports `clientEnv` from `@/configs/client-env`.
4. Do not put secrets or server-only values in Expo public env.
5. Do not read `process.env` directly from screens, hooks, or API modules.
6. Zod validation lives in `scripts/validate-env.mjs` only.
7. Do not import zod from `src/**`.

## Workflow

1. Add the value to `.env.development` and `.env.production`.
2. Add validation to `publicEnvSchema` in `scripts/validate-env.mjs`.
3. Add the typed field to `clientEnv`.
4. Consume the value through `@/configs/client-env`.

## References

- `src/configs/README.md`
