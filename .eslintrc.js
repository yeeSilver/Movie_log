module.exports = {
  root: true,
  env: {
    brower: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    // 'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],
    'no-use-before-define': 'off',
    'linebreak-style': 'off',
    'camelcase': 'warn',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'no-underscore-dangle': 0,
    // react
    'react/isx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 1,
    'react/jsx-uses-react': 'off',
    'react/react-in-isx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error', //Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies / typescript
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  ignorePatterns: ['generated/**/*.tsx'],
  // ignorePatterns: ['dist/', 'node_modules/'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
