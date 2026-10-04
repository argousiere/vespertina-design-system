// Generate `generated-tokens.css` from `tokens.ts` as custom properties on `:root`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { Plugin } from 'vite';
import type { Token } from '../src/core/tokens/tokens.ts';
import config from './build-tokens.config.json' with { type: 'json' };

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.join(root, config.sourcePath);
const targetPath = path.join(root, config.targetPath);

const toPx = (rem: number, baseRemSize: number) =>
  Math.round(rem * baseRemSize * 100) / 100;

const toDeclaration = (variable: string, token: Token, baseRemSize: number) => {
  if (!('unit' in token) || !token.unit) {
    return `  ${variable}: ${token.value};`;
  }

  return token.unit === 'rem'
    ? `  ${variable}: ${token.value}rem; /* ${toPx(token.value, baseRemSize)}px */`
    : `  ${variable}: ${token.value}${token.unit};`;
};

export const writeTokens = async () => {
  const { default: tokens } = await import(
    `${pathToFileURL(sourcePath).href}?t=${Date.now()}`
  );

  const customProperties = Object.entries<Record<string, Token>>(tokens).map(
    ([groupName, group]) =>
      [
        `  /* ${groupName} */`,
        ...Object.entries(group).map(([variable, token]) =>
          toDeclaration(variable, token, config.baseRemSize)
        ),
      ].join('\n')
  );

  const css = 
`/* Generated from ${config.sourcePath} by scripts/build-css-from-tokens-source.ts. Do not edit. */

:root {
  --ves-font-size-base: ${config.baseRemSize}px;

${customProperties.join('\n\n')}
}
`;

  if (
    !fs.existsSync(targetPath) ||
    fs.readFileSync(targetPath, 'utf8') !== css
  ) {
    fs.writeFileSync(targetPath, css);
  }
};

export const cssTokens = (): Plugin => ({
  name: 'ves-css-tokens',
  buildStart: writeTokens,
  configureServer(server) {
    server.watcher.add(sourcePath);
    server.watcher.on('change', (file) => {
      if (file === sourcePath) {
        writeTokens();
      }
    });
  },
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await writeTokens();
}
