# Tiles

<img src="https://user-images.githubusercontent.com/606529/222300035-1a5a14c9-6d27-43d4-ba00-0325493bbc68.png" alt="Current" style="max-width: 100%;" width=100><img src="https://user-images.githubusercontent.com/606529/222300118-8fb7db77-6b86-4e32-9c79-c086f4989a53.png" alt="Goals" style="max-width: 100%;" width=100>

## Goals

- [ ] an infinitely scrollable procedurally generated overland map intended accommodates something like Helicity's [LoBit Overworld](https://helicity.itch.io/lobit-overworld) tiles.
- [ ] multilayer ie terrain, rivers, roads, sites
- [ ] logic upgrade to eg perlin noise
- [ ] logically arranged art assets
- [x] simplex-arranged PNG regions
- [x] Arbitrary number of PNG regions
- [x] _(3/1)_ Two alternating squares from a PNG.
- [x] _(2/27)_ A PNG written to canvas element
- [x] A canvas element

---

# Preact, TypeScript, Vite, @benchristel/taste

## Setup

1. Click the "Use this template" button on GitHub
2. Clone the created repo
3. Run the one-time setup script to install dependencies and git hooks:
   ```
   yarn setup
   ```

## Development

### Server and Typechecker

```
yarn dev
yarn ts
```

- Opening the project in **Visual Studio Code** automatically starts the dev server and `typescript` typechecker.
- The dev server runs at http://localhost:5173 (the port number is `vite` in 1337... sort of).
- Output appears in the terminal pane (accessed via `ctrl+~`).
- Type errors also show up in the problems pane (`ctrl+shift+M`).
- The server and typechecker stop automatically when VS Code quits.

### Tests

http://localhost:5173

- **Tests** run in the browser. The test report appears at the top of the screen.
- The page will refresh (re-running the tests) whenever you save a file.
- The tests and test report are completely removed from production builds.

### Formatting

- Files get auto-formatted when you commit, so you'll never check in inconsistently-formatted code. To disable this behavior, delete `.husky/pre-commit`.
- To format all files, run `yarn format`.
- The code formatter is `prettier`. See `.prettierrc` for configuration.

## Building for production

```
yarn build
```

To smoketest your production build before deploying it, I recommend installing `serve`:

```
yarn global add serve
serve dist
```

You can then view your app at http://localhost:3000.

## Deploying

To deploy your built app to GitHub Pages, go to the `Pages` tab of your repo's settings and change the directory to deploy from to `/docs`.

This template repo is deployed at https://benchristel.github.io/preact-typescript-vite-taste/
