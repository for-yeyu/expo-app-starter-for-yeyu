---
name: styles-conventions
description: Use when adding shared React Native design tokens or screen style conventions under src/styles.
---

# Styles Conventions

## Scope

Applies to `src/styles/**` and shared style token usage.

## Rules

1. Shared colors, spacing, and radius values live in `src/styles/tokens.ts`.
2. Screen-local `StyleSheet.create` blocks stay in the owning screen file.
3. Add a token only when it is useful across at least three places.
4. Token names use camel case.
5. Do not create one-off style constants for values used once.

## Workflow

1. Reuse existing tokens when possible.
2. Add new token groups only for repeated UI needs.
3. Export new token groups through `src/styles/index.ts`.

## References

- `src/styles/README.md`
