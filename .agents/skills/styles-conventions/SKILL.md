---
name: styles-conventions
description: Use when adding NativeWind CSS entry, global CSS modules, or screen style conventions under src/styles.
---

# Styles Conventions

## Scope

Applies to `src/styles/**` and NativeWind CSS usage.

## Rules

1. NativeWind CSS entry lives in `src/styles/index.css`.
2. Import `index.css` once from `src/app/_layout.tsx`.
3. Keep Tailwind directives in `index.css`.
4. New global CSS files must be separate `.css` files imported by `index.css`.
5. Prefer NativeWind `className` for screen and component styling.
6. Keep one-off navigator/runtime colors close to the navigator configuration.
7. Do not introduce a style token module for one-off values.

## Workflow

1. Use class names for new UI styles when possible.
2. Put shared CSS in a dedicated `.css` file.
3. Import shared CSS files from `src/styles/index.css`.
4. Keep NativeWind theme extension in `tailwind.config.js`.

## References

- `src/styles/README.md`
