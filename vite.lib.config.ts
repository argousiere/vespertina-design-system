import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import pkg from './package.json' with { type: 'json' };

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
];

// Builds the publishable package into dist/:
// - dist/core: framework-agnostic CSS, tokens, fonts and images
// - dist/react: React components as an ES module
export default defineConfig({
  base: './',
  publicDir: false,
  plugins: [react()],
  experimental: {
    // Resolve font and image URLs relative to the CSS file that uses them,
    // so dist/core/styles.css works wherever the package is installed
    renderBuiltUrl: (filename, { hostType, hostId }) =>
      hostType === 'css'
        ? path.posix.relative(path.posix.dirname(hostId), filename)
        : { relative: true },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    modulePreload: false,
    rollupOptions: {
      input: {
        'core/styles': path.resolve(
          import.meta.dirname,
          'src/core/styles/index.css'
        ),
        'core/tokens': path.resolve(
          import.meta.dirname,
          'src/core/tokens/tokens.css'
        ),
        'react/index': path.resolve(import.meta.dirname, 'src/react/index.ts'),
      },
      external: (id) =>
        external.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      preserveEntrySignatures: 'strict',
      output: {
        entryFileNames: '[name].js',
        assetFileNames: ({ names }) => {
          const name = names[0] ?? '';
          if (name.endsWith('.css')) return '[name][extname]';
          if (/\.(woff2?|ttf|otf)$/.test(name))
            return 'core/fonts/[name][extname]';
          return 'core/images/[name][extname]';
        },
      },
    },
  },
});
