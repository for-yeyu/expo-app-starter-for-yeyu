# Expo Router Guide

`src/app` is the Expo Router entry layer. Keep it thin and route-focused.

## Goals

- Keep route files predictable and easy to scan.
- Keep page UI implementation inside `src/ui/app`.
- Keep providers and shared runtime wiring in `src/ui/components/providers`.

## Directory Layout

```text
src/app/
  _layout.tsx             # Root Expo Router layout
  (tabs)/
    _layout.tsx           # Tab navigator entry
    index.tsx             # Home route entry
    settings.tsx          # Settings route entry
```

## Responsibilities

### `src/app/**`

- Define route entries, navigators, and route groups.
- Return named UI components from mirrored `src/ui/app` paths.
- Keep screen files mostly import + return.

### `src/ui/app/**`

- Implement screen UI, interactions, and route-local view logic.
- Mirror the route structure from `src/app` for fast lookup.

## Route Mapping

```text
src/app/(tabs)/index.tsx
src/ui/app/(tabs)/home/index.tsx

src/app/(tabs)/settings.tsx
src/ui/app/(tabs)/settings/index.tsx
```

## Checklist

- New screens have a thin route entry in `src/app/**`.
- Screen implementation lives under `src/ui/app/**`.
- Route entries export `default function Page()` or `default function Layout()`.
- Client data flows through `src/hooks`, then `src/api`.
