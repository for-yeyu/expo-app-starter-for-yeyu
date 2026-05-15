---
name: hooks-conventions
description: Use when building src/hooks hooks, especially src/hooks/api React Query wrappers mapped to src/api domains.
---

# Hooks Conventions

## Scope

Applies to `src/hooks/**`.

## Structure Rules

1. `src/hooks/api` mirrors `src/api` domains.
2. Query hooks live in `query/` and use `useQuery`.
3. Mutation hooks live in `mutation/` and use `useMutation`.
4. Hook-level helper types live in `types/` when needed.
5. Use `index.ts` barrels for folders that actually export code.

## Boundary Rule

Screens must call APIs through hooks.

Required chain:

`screen ui -> src/hooks/api -> src/api -> src/lib/http`

## Workflow

1. Confirm the API function exists.
2. Create the corresponding hook in a mirrored path.
3. Use stable query keys.
4. Add invalidation behavior for mutations.
5. Export through local and domain `index.ts`.

## References

- `src/hooks/README.md`
- `src/api/README.md`
