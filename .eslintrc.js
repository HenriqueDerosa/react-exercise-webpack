module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'react/no-unescaped-entities': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': ['warn', { ignore: ['children'] }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['warn'],
    'no-param-reassign': ['error'],
    'multiline-ternary': 'off',
  },
}
