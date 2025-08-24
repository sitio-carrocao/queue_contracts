const js = require('@eslint/js');
const importHelpers = require('eslint-plugin-import-helpers');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const sortDestructureKeys = require('eslint-plugin-sort-destructure-keys');
const typescriptSortKeys = require('eslint-plugin-typescript-sort-keys');
const globals = require('globals');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  {
    ignores: [
      'dist'
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: [
      '**/*.{ts,tsx}',
    ],
    ignores: [
      '**/*.js',
      'node_modules',
      'build',
      '/src/react-app-env.d.ts',
      '/*.js',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
    plugins: {
      'sort-destructure-keys': sortDestructureKeys,
      'import-helpers': importHelpers,
      'typescript-sort-keys': typescriptSortKeys,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          semi: true,
          endOfLine: 'auto',
          plugins: [],
        },
      ],
      'sort-destructure-keys/sort-destructure-keys': [
        2,
        {
          caseSensitive: false,
        },
      ],
      'import-helpers/order-imports': [
        'warn',
        {
          'newlinesBetween': 'always',
          'groups': [
            '/^react$/',
            '/dotenv/',
            'module',
            ['parent', 'sibling', 'index'],
          ],
          'alphabetize': {
            'order': 'asc',
            'ignoreCase': true,
          },
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '_',
        },
      ],
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'interface',
          'format': ['PascalCase'],
          'custom': {
            'regex': '^I[A-Z]',
            'match': true
          }
        },
        {
          'selector': 'enum',
          'format': ['PascalCase'],
          'custom': {
            'regex': '^E[A-Z]',
            'match': true
          }
        }
      ],
    },
    settings: {
      'import/parsers': {
        [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
      },
    },
  },
)
