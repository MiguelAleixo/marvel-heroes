module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  rules: {
    ['react/jsx-filename-extension']: [1, { 'extensions': ['.js', '.jsx'] }],
    ['global-require']: 'off',
    ['import/prefer-default-export']: ['off', 'never'],
    ['import/no-dynamic-require']: 'off',
    ['jsx-a11y/html-has-lang']: 'off',
    ['prefer-default-export']: 'off',
    ['react/prop-types']: 'warn',
    ['react/react-in-jsx-scope']: 'off',
    ['react/jsx-one-expression-per-line']: 'off',
    ['react/forbid-prop-types']: 'off',
    ['react/require-default-props']: 'off',
    ['react/jsx-no-duplicate-props']: ['error', { ignoreCase: false }],
    ['no-param-reassign']: 'off',
    ['jsx-a11y/anchor-is-valid']: 'off',
    ['template-curly-spacing']: 'off',
    ['arrow-parens']: 'off',
    ['prefer-object-spread']: 'off',
    ['react/jsx-props-no-spreading']: 'off',
    ['react/jsx-curly-newline']: 'off',
    ['react/no-deprecated']: 'off',
    ['react/jsx-fragments']: 'off',
    ['react/state-in-constructor']: 'off',
    ['comma-dangle']:['off', 'never']
  },
};
