module.exports = {
  extends: [
    './index.js',
    'prettier/react'
  ],
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-boolean-value': 2,
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-array-index-key': 2,
    'react/no-children-prop': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/sort-prop-types': 2
  }
};
