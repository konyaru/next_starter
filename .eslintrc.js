module.exports = {
  env: { browser: true, node: true, es2021: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'next', 'next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'prefer-const': ['off'],
    'no-irregular-whitespace': ['off'],
  },
}
