import yinmBase from "eslint-config-yinm";
import yinmReact from "eslint-config-yinm/react";
import yinmTypeScript from "eslint-config-yinm/typescript";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...yinmBase,
  ...yinmReact,
  ...yinmTypeScript,

  {
    ignores: ["dist/*"],
  },
];
