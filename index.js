module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'prettier', 'sort-imports-es6-autofix'],
  rules: {
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    curly: 'error',
    'default-case': 'error',
    'dot-notation': ['error', {allowPattern: '^[a-z]+(_[a-z]+)+$'}],
    eqeqeq: 'error',
    'import/default': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': ['error', {commonjs: true}],
    'no-case-declarations': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
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
    'no-unused-vars': ['error', {ignoreRestSiblings: true}],
    'no-use-before-define': ['error', 'nofunc'],
    'no-var': 'error',
    'prefer-const': 'error',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'sort-keys': ['error', 'asc', {caseSensitive: false, natural: true}],
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
};
