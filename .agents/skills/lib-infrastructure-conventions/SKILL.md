---
name: lib-infrastructure-conventions
description: Use when modifying src/lib infrastructure modules, request/error/runtime wiring, or utility helpers.
---

# Lib Infrastructure Conventions

## Scope

Applies to `src/lib/**`.

## Key Directories

- `common/errors`: shared error models.
- `http`: fetch wrapper and React Query client.
- `utils`: pure helpers.

## Modification Policy

Normal feature work should prefer `src/lib/utils/**`.

For `src/lib/common/**` and `src/lib/http/**`, change only for an explicit cross-layer requirement. Keep edits small and check API, hooks, and UI impact.

## Rules

1. API transport uses `@/lib/http/fetch`.
2. React Query uses `queryClient` from `@/lib/http/react-query`.
3. Shared errors extend `BaseError`.
4. Do not wrap request helpers with feature-local error handling.

## References

- `src/lib/README.md`
- `src/api/README.md`
