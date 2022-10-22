# good-things

Hosted on [Netlify](https://admirable-palmier-00743c.netlify.app/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Notes on the project

If given more time I would:

- Style the search input and 'secondary-nav' items
- Make the navigation responsive (add mobile menu)
- Add hover/active/focus states to buttons
- Refine button styles, possibly use computed classes to group classes rather than apply classes individually
- Consolidate PrimaryNavigation and SecondaryNavigation into one component, adding a boolean prop to differentiate them, and conditionally display the logo
