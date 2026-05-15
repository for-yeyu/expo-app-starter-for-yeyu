# Lib Guide

`src/lib` contains low-level infrastructure shared by API, hooks, and UI.

## Goals

- Centralize HTTP, error, runtime, and utility primitives.
- Keep cross-cutting behavior consistent.
- Keep this layer stable during normal feature work.

## Directory Layout

```text
src/lib/
  common/
    errors/               # Shared error models
  http/                   # Fetch wrapper and React Query client
  utils/                  # Pure helpers
```

## Modification Policy

Normal feature work should prefer `src/lib/utils`.

Change `common` or `http` only when a feature needs global behavior to change. Keep those edits small and check every layer that depends on them.

## Usage Rules

- API modules use `@/lib/http/fetch`.
- Screens use hooks from `@/hooks`.
- React Query uses the shared `queryClient` from `@/lib/http/react-query`.
- Shared errors should extend `BaseError`.
- Do not wrap request helpers with feature-local error handling.

## Checklist

- Request logic stays in `src/lib/http` and `src/api`.
- Shared infrastructure changes are intentionally scoped.
- Utilities are pure and framework-independent.
- UI code does not import HTTP helpers directly.
