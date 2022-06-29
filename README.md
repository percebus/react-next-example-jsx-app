# react-next-example-jsx-app

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

See [install-gnu-sed-on-mac-osx.sh](https://gist.github.com/andre3k1/e3a1a7133fded5de5a9ee99c87c6fa0d)
