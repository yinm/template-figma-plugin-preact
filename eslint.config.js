import yinmBase from "eslint-config-yinm";
import yinmTypeScript from "eslint-config-yinm/typescript";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...yinmBase,
  ...yinmTypeScript,

  {
    ignores: ["dist/*"],
  },
]; // TODO: Add Preact ESLint rules
