# Styles Guide

`src/styles` stores shared React Native style primitives.

## Goals

- Keep app-wide colors, spacing, and radius values centralized.
- Keep screen-specific styles close to the screen component.
- Avoid one-off global style constants scattered through UI files.

## Directory Layout

```text
src/styles/
  tokens.ts               # Shared design tokens
  index.ts                # Public style exports
```

## Rules

- Put reusable design primitives in `tokens.ts`.
- Keep `StyleSheet.create` blocks inside the component file that owns them.
- Add new token groups only when at least three screens or components need them.
- Do not create style constants for one-off values.

## Checklist

- Shared colors and spacing come from `@/styles/tokens`.
- Screen-local styles stay near the screen.
- Token names use camel case.
