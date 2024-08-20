import globals from "globals";
import pluginJs from "@eslint/js";
// import pluginReact from 'eslint-plugin-react' // 在這裡使用的是vue所以先註解
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,vue}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  pluginJs.configs.recommended,
  configPrettier,
  // pluginReact.configs.flat.recommended,
  ...pluginVue.configs["flat/essential"],
];