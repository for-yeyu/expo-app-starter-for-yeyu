# Hooks Guide

`src/hooks` stores application hooks. API-calling hooks live under `src/hooks/api`.

## Goals

- Keep screens free of request details.
- Mirror `src/api` domains for fast lookup.
- Use React Query for async data consumed by screens.

## Directory Layout

```text
src/hooks/
  api/
    <domain>/
      query/              # useQuery hooks
      mutation/           # useMutation hooks
      types/              # Hook-level helper types
      index.ts            # Domain barrel export
```

Create `query` or `mutation` only when hooks exist for that behavior.

## Mapping Rule

Keep hooks aligned with API modules.

```text
src/api/app-info/query/get-app-info.ts
src/hooks/api/app-info/query/use-app-info.ts
```

## Screen Usage Rule

Screens and reusable UI components should call hooks, not API functions.

Required flow:

```text
screen ui -> src/hooks/api -> src/api -> src/lib/http
```

## Checklist

- New client-facing API functions have a hook.
- Hook path mirrors the API path.
- Query hooks use `useQuery`.
- Mutation hooks use `useMutation`.
- Screens consume hooks instead of direct requests.
