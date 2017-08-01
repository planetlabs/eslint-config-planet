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
      "error", {singleQuote: true, bracketSpacing: false}
    ],
    'array-callback-return': "error",
    'block-scoped-var': "error",
    'curly': "error",
    'default-case': "error",
    'dot-notation': ["error", {allowPattern: '^[a-z]+(_[a-z]+)+$'}],
    'eqeqeq': "error",
    'no-case-declarations': "error",
    'no-cond-assign': "error",
    'no-console': "error",
    'no-control-regex': "error",
    'no-debugger': "error",
    'no-delete-var': "error",
    'no-dupe-args': "error",
    'no-dupe-keys': "error",
    'no-duplicate-case': "error",
    'no-empty': "error",
    'no-empty-character-class': "error",
    'no-eq-null': "error",
    'no-ex-assign': "error",
    'no-extra-boolean-cast': "error",
    'no-fallthrough': "error",
    'no-func-assign': "error",
    'no-inner-declarations': ["error", 'functions'],
    'no-invalid-regexp': "error",
    'no-irregular-whitespace': "error",
    'no-negated-in-lhs': "error",
    'no-obj-calls': "error",
    'no-octal': "error",
    'no-process-exit': "off",
    'no-redeclare': "error",
    'no-regex-spaces': "error",
    'no-sparse-arrays': "error",
    'no-undef': "error",
    'no-underscore-dangle': "off",
    'no-unexpected-multiline': "error",
    'no-unreachable': "error",
    'no-unsafe-finally': "error",
    'no-unused-vars': ["error", {vars: 'all', args: 'none'}],
    'no-use-before-define': ["error", 'nofunc'],
    'strict': "off",
    'use-isnan': "error",
    'valid-typeof': "error"
  }
};
