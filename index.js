import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import sortImportPlugin from 'eslint-plugin-sort-imports-es6-autofix';

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    name: 'planet/recommended',
    plugins: {
      prettier,
      'sort-imports-es6-autofix': sortImportPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      curly: 'error',
      'default-case': 'error',

      'dot-notation': [
        'error',
        {
          allowPattern: '^[a-z]+(_[a-z]+)+$',
        },
      ],

      eqeqeq: 'error',
      'import/default': 'error',

      'import/extensions': [
        'error',
        'always',
        {
          ignorePackages: true,
        },
      ],

      'import/first': 'error',
      'import/named': 'error',
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',

      'import/no-unresolved': [
        'error',
        {
          commonjs: true,
        },
      ],

      'no-case-declarations': 'error',
      'no-cond-assign': 'error',
      'no-console': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-eq-null': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-inner-declarations': ['error', 'functions'],
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-negated-in-lhs': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-param-reassign': 'error',
      'no-process-exit': 'off',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-sparse-arrays': 'error',
      'no-undef': 'error',
      'no-underscore-dangle': 'off',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',

      'no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],

      'no-use-before-define': ['error', 'nofunc'],
      'no-var': 'error',
      'prefer-const': 'error',

      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          bracketSpacing: false,
          arrowParens: 'avoid',
        },
      ],

      strict: 'off',

      'sort-imports-es6-autofix/sort-imports-es6': [
        'error',
        {
          ignoreCase: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
        },
      ],

      'use-isnan': 'error',
      'valid-typeof': 'error',
    },
  },
];
