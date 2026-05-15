---
name: expo-router-conventions
description: Use when creating or modifying app route entries, layouts, tab navigators, and app-to-ui route mapping.
---

# Expo Router Conventions

## Scope

Applies to `src/app/**`.

## Rules

1. Keep `src/app` as a thin route-entry layer.
2. Put screen implementation details in `src/ui/app`.
3. Route entries export `default function Page()` or `default function Layout()`.
4. Route entries return named components imported from mirrored `src/ui/app` paths.
5. Navigators may stay in `app/**/_layout.tsx`.

Example:

```tsx
```tsx
import { HomePage } from '@/ui/app/(tabs)/home';

export default function Page() {
  return <HomePage />;
}
```

## Mapping Rule

```text
src/app/(tabs)/index.tsx
src/ui/app/(tabs)/home/index.tsx
```

## Workflow

1. Add a route entry in `src/app`.
2. Add or update the mirrored screen UI under `src/ui/app`.
3. Keep route entries minimal.
4. Put shared providers in `src/ui/components/providers`.

## References

- `src/app/README.md`
- `src/ui/README.md`
