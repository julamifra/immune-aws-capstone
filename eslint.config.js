import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  // Global settings for all files
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Config for Source files (React/JSX)
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...configPrettier.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'off',
    },
  },

  // Config for root-level config/script files (Node.js)
  {
    files: [
      'eslint.config.js',
      'tailwind.config.js',
      'vite.config.js',
      'postcss.config.js',
      'tools/**/*.js',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
    },
  },
];
