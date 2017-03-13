module.exports = {
  extends: [
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  rules: {
    'prettier/prettier': [
      2, {singleQuote: true, bracketSpacing: false}
    ],
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'curly': 2,
    'default-case': 2,
    'dot-notation': [2, {allowPattern: '^[a-z]+(_[a-z]+)+$'}],
    'eqeqeq': 2,
    'no-case-declarations': 2,
    'no-cond-assign': 2,
    'no-console': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eq-null': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-process-exit': 0,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {vars: 'all', args: 'none'}],
    'no-use-before-define': [2, 'nofunc'],
    'strict': 0,
    'use-isnan': 2,
    'valid-typeof': 2
  }
};
