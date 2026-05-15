# Configs Guide

`src/configs` contains client-safe runtime configuration.

## Goals

- Keep Expo public env usage in one place.
- Avoid importing env values directly from screens, hooks, or API modules.
- Keep secrets out of the app bundle.

## Directory Layout

```text
src/configs/
  client-env.ts           # Client-safe env and app metadata
  index.ts                # Public config exports
```

## Expo Env Rules

Expo embeds `EXPO_PUBLIC_*` values into the client bundle. Treat every value in this layer as public.

- Use `EXPO_PUBLIC_ENVIRONMENT` for the current environment.
- Use `EXPO_PUBLIC_API_BASE_URL` when the app has a backend API.
- Do not put secrets, private tokens, or server-only config in Expo public env.
- Consume config through `@/configs/client-env`.

## How To Add Env Values

1. Add the value to `.env.development` and `.env.production`.
2. Add the typed field to `clientEnv`.
3. Use `clientEnv` from app code.

## Checklist

- Env reads stay inside `src/configs`.
- Env names use Expo's `EXPO_PUBLIC_*` convention.
- App code imports `clientEnv`, not `process.env`.
- No secret values are added to this folder.
