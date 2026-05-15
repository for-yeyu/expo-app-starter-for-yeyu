# UI Guide

`src/ui` contains screen implementations and reusable UI modules.

## Goals

- Keep `src/app` as a thin Expo Router entry layer.
- Keep real screen implementation in `src/ui/app`.
- Group reusable UI by clear intent.

## Directory Layout

```text
src/ui/
  app/                    # Screen UI mirrored from app routes
    (tabs)/
      home/
      settings/
    layout/               # Shared layout pieces
  components/
    providers/            # Global providers
    shared/               # Generic shared components
  svgs/                   # SVG components
```

## Mapping Rule

Keep route entries and screen UI aligned.

```text
src/app/(tabs)/index.tsx
src/ui/app/(tabs)/home/index.tsx
```

## Component Rules

- Screen files export named components, such as `HomePage`.
- Route-only files in `src/app` import and return those named components.
- Child component filenames use kebab-case.
- Reusable providers live in `src/ui/components/providers`.
- Generic shared components live in `src/ui/components/shared`.
- Prefer NativeWind `className` for component styling.

## Checklist

- New screens have `src/ui/app/**/index.tsx`.
- `src/app` and `src/ui/app` paths stay mirrored.
- Shared components are not hidden inside route folders.
- Screen data comes from hooks, not direct API calls.
- Screen styling uses NativeWind where supported.
