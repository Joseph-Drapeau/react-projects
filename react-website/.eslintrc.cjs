module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-solid
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended', // This needs to be last in the extends array.
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'react-refresh',
    'tailwindcss',
    'prettier',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // Visit https://eslint.org/docs/latest/rules/ for reference to more rules.
    camelcase: 'error',
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['App'],
        specialLink: ['to'],
      },
    ],
    quotes: ['error', 'single'],
    'no-shadow': 'off',
    'react/jsx-filename-extension': [
      0,
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'error',
    'no-duplicate-imports': 'error',
  },
  settings: {
    'import/extensions': [
      'error',
      'always',
      {
        pattern: { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
      },
    ],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
