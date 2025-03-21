import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    plugins: {
      react,
    },
    rules: {
      ...js.configs.recommended.rules, // Recommended JavaScript rules
      ...react.configs.recommended.rules, // Recommended React rules
    },
  },
];
