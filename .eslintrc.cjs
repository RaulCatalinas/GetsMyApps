module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['solid'],
  extends: [
    'standard-with-typescript',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/recommended',
    'plugin:@typescript-eslint/strict-type-checked'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'astro/no-set-html-directive': 'error'
      }
    }
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
