module.exports = {
  extends: 'airbnb/base',
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', './webpack.*js'],
      },
    ],
    'import/no-named-as-default': [0],
    indent: ['error', 2, { MemberExpression: 1, SwitchCase: 1 }],
    'max-len': 'off',
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/prefer-stateless-function': 1,
    'react/require-extension': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'global-require': 'off',
  },
  env: {
    browser: true,
    mocha: true,
  },
};
