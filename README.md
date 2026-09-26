# Vespertina Design System

My personal Design System built in React + native CSS.

Design developed from scratch in [Figma](https://www.figma.com/design/jiNUbgAPy50E6CpPQEvW16/Vespertine-Cadet?node-id=377-24&t=GjcURnCKMKcftSI5-1).

## Usage

The package has a framework-agnostic core (CSS, tokens, fonts, images) and a React implementation built on it.

Core styles, for any HTML page or framework:
```css
@import 'vespertina-design-system/core/styles.css';
```

Tokens only (CSS custom properties, no component styles):
```css
@import 'vespertina-design-system/core/tokens.css';
```

React components (requires React 19, and the core styles above):
```tsx
import { Button } from 'vespertina-design-system/react';
```

Components are styled through the `vespertina-theme vespertina-theme--dark` classes, so add them to a wrapping element such as `<body>`.

## Development

Launch Storybook:
```shell
npm run storybook
```

Build the package into `dist/`:
```shell
npm run build
```
