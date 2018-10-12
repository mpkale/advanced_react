export const parser = 'babel-eslint';
export const env = {
  browser: true,
  commonjs: true,
  es6: true,
  node: true,
  jest: true,
};
export const extends = ['eslint:recommended', 'plugin:react/recommended'];
export const parserOptions = {
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    jsx: true,
  },
  sourceType: 'module',
};
export const plugins = ['react'];
export const rules = {
  'react/prop-types': ['off'],
  indent: ['error', 2, { SwitchCase: 1 }],
  'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'no-console': ['warn', { allow: ['info', 'error'] }],
  'arrow-parens': ['error', 'always'],
};