module.exports = {
  env: {
    es6: true,
    node: true,
    commonjs: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ].concat(['best-practices'].map(rule => require.resolve(`./rules/${rule}`))),
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parserOptions: {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  }
};
