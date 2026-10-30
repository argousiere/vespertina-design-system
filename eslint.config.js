// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import importX, { createNodeResolver } from 'eslint-plugin-import-x';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'storybook-static']),
  storybook.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintReact.configs['recommended-typescript'],
    ],
    plugins: {
      'import-x': importX,
    },
    settings: {
      'import-x/resolver-next': [createNodeResolver()],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['vitest.shims.d.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-duplicates': 'error',
      curly: ['error', 'all'],
      'arrow-body-style': ['error', 'always'],
      'import-x/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            'parent',
            ['sibling', 'index'],
          ],
          pathGroups: [
            { pattern: '@core/**', group: 'internal', position: 'before' },
            { pattern: '@{images,styles}/**', group: 'internal' },
            { pattern: '@react/**', group: 'parent' },
            { pattern: '@components/**', group: 'sibling', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          distinctGroup: false,
        },
      ],
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    extends: [vitest.configs.recommended],
    rules: {
      'vitest/valid-title': ['error', { mustMatch: { it: '^should' } }],
      'vitest/max-expects': ['error', { max: 1 }],
      'vitest/prefer-strict-equal': 'error',
    },
  },
  {
    files: ['src/react/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^\\.{1,2}/(.*/)?core(/|$)',
              message: 'Import from core using the `@core/` alias.',
            },
          ],
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: ':function > ObjectPattern > Property > AssignmentPattern',
          message: 'Do not set default values in destructured props.',
        },
      ],
    },
  },
  prettier,
]);
