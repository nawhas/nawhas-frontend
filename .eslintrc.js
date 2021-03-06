// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "import/no-unresolved": 0,
    "no-shadow": 0,
    "no-plusplus": 0,
    "no-param-reassign" : 0,
    "comma-dangle": 0,
    "no-multi-assign": 0,
    "object-curly-spacing": 0,
    "import/no-named-as-default-member": 0,
    "quote-props": 0,
    "dot-notation": 0,
    "spaced-comment": 0,
    "arrow-parens": 0,
  }
}
