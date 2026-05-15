---
name: ui-conventions
description: Use when implementing or refactoring src/ui screen modules, shared components, providers, or SVG components.
---

# UI Conventions

## Scope

Applies to `src/ui/**`.

## Structure Rules

1. `src/ui/app` mirrors `src/app` route structure.
2. Screen implementation entry files are `index.tsx`.
3. Internal child files use kebab-case.
4. Shared route layout components live in `src/ui/app/layout`.
5. Global providers live in `src/ui/components/providers`.

## Component Rules

Default screen declaration style:

```tsx
export function HomePage() {
  return null;
}
```

Rules:

- Screen components use named exports.
- Route entries in `src/app` import and return screen components.
- Shared components are placed under `components/shared`.
- SVG components are placed under `svgs`.
- Screen data comes from hooks.
- Prefer NativeWind `className` for component styling.

## Workflow

1. Implement screens under `src/ui/app/<route>/index.tsx`.
2. Keep mapping with `src/app/<route>`.
3. Put reusable providers under `components/providers`.
4. Put generic shared UI under `components/shared`.

## References

- `src/ui/README.md`
- `src/app/README.md`
