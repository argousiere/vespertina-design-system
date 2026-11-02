# Vespertina Design System

![](src/core/assets/images/vespertina-design-system-banner.png)

My personal Design System built in React + native CSS.

Designed from scratch in [Figma](https://www.figma.com/design/jiNUbgAPy50E6CpPQEvW16/Vespertine-Cadet?node-id=377-24&t=GjcURnCKMKcftSI5-1).

## Overview
- Design tokens are generated into [css variables](./src/core/tokens/generated-tokens.css) from a [dictionary](./src/core/tokens/tokens.ts).
- Components are implemented in React for now, but other frameworks will be supported (Angular, Svelte, Vue).
- Blogging features are the main use case for now as this project was motivated by the migration of my website from Ghost to my own system, but I plan on expanding to other use cases, such as forms, multimedia editors, and dataviz dashboards.

## Installation

This package is available on GitHub Packages as a private package `@argousiere/vespertina-design-system`.

In your `.npmrc`, reference the registry:

```ini
@argousiere:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Install via npm:

```shell
npm install react@19 vite@7 @argousiere/vespertina-design-system
```

## Usage

In your html body or component html, add the following classes:

```html
<body class="vespertina-theme vespertina-theme--dark"></body>
```

### Import design system tokens and component library

```css
@import @argousiere/vespertina-design-system/core/tokens.css;
@import @argousiere/vespertina-design-system/core/styles.css;
```

### Import assets
```
import emptyCover from '@argousiere/vespertina-design-system/images/ves-icon-empty-cover.svg';
```

### Import React components
```ts
import { Button } from '@argousiere/vespertina-design-system/react';
```

## Development

Launch Storybook:
```shell
npm run storybook
```

Build the package into `dist/`:
```shell
npm run build
```

Rebuild design token dictionary, styles, components, typings on every change:

```shell
npm run build:watch
```

## Testing

For now, only unit tests are available, but component, e2e, and visual regression testing (VRT) will be added.

```shell
npm run test
```

## Attributions and Inspirations
- Icons from https://lucide.dev/
- Progressive Blur from https://kennethnym.com/blog/progressive-blur-in-css/
