const eslintPluginAstro = require('eslint-plugin-astro')
const eslintPluginSolid = require('eslint-plugin-solid')

module.exports = [
  ...eslintPluginAstro.configs['flat/recommended'],
  eslintPluginSolid.configs['flat/recommended'],
  eslintPluginSolid.configs['flat/typescript'],
  {
    ...require('eslint-config-love'),
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'error',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }
]
