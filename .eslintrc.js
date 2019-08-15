module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'no-unused-vars': 'off'
  },
  'globals': {
    'fetch': false
  }
}
