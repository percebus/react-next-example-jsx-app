# `react-next-tutorials-jsx-app`

SRC: [nextjs.org/learn/...](https://nextjs.org/learn/basics/create-nextjs-app/)

## Development

```bash
$> npm run dev
```

## Build: `dist/`

```bash
$> npm run dist
```

## Package: `out/`

This process creates a standalone version (w/o server-side rendering) that you can host as a SPA anywhere.

```bash
$> npm run pkg
```

Which is mainly `next export` pls some other things

### `pkg.ba.sh`

This ensures that `./out` is `chrome-extension` friendly.

Mainly, it renames `_next` folder to `next` and all the corresponding references

#### BUG

`sed` does not work in some macOS, mainly due to the version.

See [Install GNU sed on Mac OS and Set It as Default
](https://medium.com/@bramblexu/install-gnu-sed-on-mac-os-and-set-it-as-default-7c17ef1b8f64)
