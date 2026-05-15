# API Guide

`src/api` stores async data functions by business domain.

## Goals

- Keep request and async data logic centralized.
- Separate read and write behavior with `query` and `mutation`.
- Keep shared request and response contracts in `types`.
- Re-export each domain through `index.ts` for predictable imports.

## Directory Layout

```text
src/api/
  <domain>/
    query/                # Read/fetch functions
    mutation/             # Write/update functions
    types/                # Shared params and response types
    index.ts              # Domain barrel export
```

Create `query` or `mutation` only when the domain needs it.

## Request Rules

Network functions must use helpers from `@/lib/http/fetch`.

```ts
import { apiRequest, httpRequest } from '@/lib/http/fetch';
```

- Use `apiRequest` for endpoints under the configured `clientEnv.apiBaseUrl`.
- Use `httpRequest` for absolute third-party URLs.
- Do not call raw `fetch` from screen components or hooks.
- Do not wrap request helpers with route-local error handling.

## Client Boundary

Required flow:

```text
screen ui -> src/hooks -> src/api -> src/lib/http
```

Screen components should not call API functions or request helpers directly.

## Checklist

- API functions are placed in `query` or `mutation`.
- Shared contracts are defined in `types`.
- Domain and subfolders expose `index.ts` only when useful.
- Network calls use `apiRequest` or `httpRequest`.
- Screens consume API data through hooks.
