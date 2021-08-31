module.exports = {
  extends: [
    'react-app',
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules: {
    //
    // Configurations
    //
    // Base
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-template-curly-in-string': 'warn',
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],
    'array-callback-return': ['warn', { checkForEach: true }],
    curly: 'warn',
    'default-case': 'warn',
    'default-case-last': 'warn',
    'dot-notation': 'warn',
    eqeqeq: 'error',
    'no-else-return': 'warn',
    'no-floating-decimal': 'warn',
    'no-new-func': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'warn',
    'no-throw-literal': 'error',
    'no-useless-concat': 'warn',
    'prefer-promise-reject-errors': 'warn',
    radix: 'error',
    // React
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-this-in-sfc': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/self-closing-comp': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-fragments': 'warn',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'warn',
    // Typescript
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/array-type': ['warn', { default: 'generic' }],
    '@typescript-eslint/no-require-imports': 'warn',
    // This seemed to warn more than I would expect. Try again another time
    // '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    // Import
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-anonymous-default-export': 'warn',

    //
    // Disabled
    //
    // React
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    // Typescript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

    // Would Like to turn these back on eventually
    indent: 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // Seems to have a high number of false positives when mixed with ts. Worth digging into this more
    'import/no-named-as-default-member': 'off',
  },
};
