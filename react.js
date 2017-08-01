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
    'react/jsx-boolean-value': "error",
    'react/jsx-key': "error",
    'react/jsx-no-duplicate-props': "error",
    'react/jsx-no-undef': "error",
    'react/jsx-sort-props': "off",
    'react/jsx-uses-react': "error",
    'react/jsx-uses-vars': "error",
    'react/no-array-index-key': "error",
    'react/no-children-prop': "error",
    'react/no-did-mount-set-state': "error",
    'react/no-did-update-set-state': "error",
    'react/no-direct-mutation-state': "error",
    'react/no-multi-comp': "error",
    'react/no-unescaped-entities': "error",
    'react/no-unknown-property': "error",
    'react/no-unused-prop-types': "error",
    'react/prop-types': "error",
    'react/react-in-jsx-scope': "error",
    'react/sort-prop-types': "off"
  }
};
