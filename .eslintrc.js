module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  plugins: [
  ],
  rules: {
    'vue/valid-v-slot': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
