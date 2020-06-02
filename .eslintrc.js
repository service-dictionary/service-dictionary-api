module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: false,
    jest: true,
    node: true,
    mocha: true,
  },
  rules: {
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
