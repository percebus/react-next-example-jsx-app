# react-next-example-jsx-app

SRC: [nextjs.org/learn/...](https://nextjs.org/learn/basics/create-nextjs-app/)

## Development

```bash
$> npm run dev
```

## Build (`dist`)

```bash
$> npm run dist
```

## Package

This process creates a standalone version (w/o server-side rendering) that you can host as a SPA anywhere.

```bash
$> npm run pkg
```

Which is mainly `next export` pls some other things

### `pkg.ba.sh`

This ensures that `./out` is `chrome-extension` friendly.

Mainly, it renames `_next` folder to `next` and all the corresponding references
