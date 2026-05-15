# Styles Guide

`src/styles` stores the NativeWind CSS entry and global CSS modules.

## Goals

- Keep NativeWind's CSS entry in one place.
- Import additional global CSS files from `index.css`.
- Prefer `className` for screen styling.
- Keep screen styling in NativeWind classes.

## Directory Layout

```text
src/styles/
  index.css               # NativeWind CSS entry and global imports
  <name>.css              # Optional global CSS module imported by index.css
```

## Rules

- Import `index.css` once from `src/app/_layout.tsx`.
- Keep Tailwind directives in `index.css`.
- If another global CSS file is needed, create a new `.css` file and import it from `index.css`.
- Use NativeWind `className` for screen and component styling.
- Keep one-off navigator/runtime colors close to the navigator configuration.

## Checklist

- `metro.config.js` points NativeWind to `src/styles/index.css`.
- New global CSS files are imported by `index.css`.
- Screen UI uses `className` where NativeWind supports it.
- No app-level style token module is introduced for one-off values.
