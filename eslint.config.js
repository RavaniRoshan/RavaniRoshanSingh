import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReact,
    },
  },
  ...tseslint.configs.recommended,
];
