// import { defineConfig } from "eslint/config";
// import globals from "globals";
// import js from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ]);

import standard from 'eslint-config-standard';
import standardJsx from 'eslint-config-standard-jsx';
import typescriptEslintParser from '@typescript-eslint/parser';

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...standard.globals,
        ...standardJsx.globals
      },
      parser: typescriptEslintParser
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    settings: {
      ...standard.settings,
      ...standardJsx.settings
    },
    rules: {
      ...standard.rules,
      ...standardJsx.rules,
      'no-unused-vars': 'off',
      'no-useless-constructor': 'off'
    }
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      env: {
        node: true,
        browser: true
      }
    }
  }
];    