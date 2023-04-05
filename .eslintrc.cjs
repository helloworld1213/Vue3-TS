/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 未使用的变量,不再报警告
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off'
  }
}
