import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["config/environments/*", "bin/*", "vendor/*", "node_modules/*", "tmp/*", "public/*"],
  },
  js.configs.recommended,
  {
    files: ["app/javascript/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];
