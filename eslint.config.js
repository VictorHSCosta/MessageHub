// ESLint 9+ Flat Config
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  // Quais caminhos o ESLint deve ignorar
  {
    ignores: [
      'node_modules/',
      'public/',
      'dist/',
      'coverage/',
      'tmp/',
      'vendor/',
      // geralmente o vite config não quer ser lintado
      'vite.config.*',
    ],
  },
  js.configs.recommended,
  {
    files: ['app/frontend/**/*.js', 'app/frontend/**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]
