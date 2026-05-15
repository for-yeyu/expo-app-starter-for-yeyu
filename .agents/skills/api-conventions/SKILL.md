---
name: api-conventions
description: Use when creating or updating src/api async data functions, request functions, domain exports, query/mutation separation, and HTTP transport choices.
---

# API Conventions

## Scope

Applies to `src/api/**`.

## Domain Structure

```text
src/api/<domain>/
  types/
  query/      # optional read/fetch functions
  mutation/   # optional write/side-effect functions
  index.ts
```

Rules:

1. `types/` is required when the domain has shared contracts.
2. Create `query/` only when read functions exist.
3. Create `mutation/` only when write functions exist.
4. Do not create empty query or mutation folders.
5. Use `index.ts` barrels for folders that actually export code.

## Request Rules

Network functions must use helpers from `@/lib/http/fetch`.

1. Use `apiRequest` for endpoints under `clientEnv.apiBaseUrl`.
2. Use `httpRequest` for absolute third-party URLs.
3. Do not call raw `fetch` outside `src/lib/http`.
4. Do not wrap request helpers with feature-local error handling.

## Client Boundary Rule

Required chain:

`screen ui -> src/hooks -> src/api -> src/lib/http`

## Workflow

1. Add the API function under `query/` or `mutation`.
2. Add shared contracts under `types/`.
3. Export through local and domain `index.ts`.
4. Add a mirrored hook when a screen needs the data.

## References

- `src/api/README.md`
- `src/hooks/README.md`
- `src/lib/README.md`
