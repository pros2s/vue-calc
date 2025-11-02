import eslintJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  eslintJs.configs.recommended,
  ...tsEslint.configs.recommended,

  ...pluginVue.configs['flat/recommended'],

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: { parser: tsEslint.parser },
    },
  },

  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  prettierConfig,

  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
