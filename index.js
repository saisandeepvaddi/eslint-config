module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    allowImportExportEverywhere: true,
  },
  extends: [
    "prettier",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["prettier", "react", "react-hooks"],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "array-callback-return": "off",
    "no-console": "off",
    "no-debugger": "error",
    "no-undef": "error",
    "no-unused-vars": [2, { args: "after-used", argsIgnorePattern: "^_" }],
    eqeqeq: "error",
    "no-var": "error",
    "react/prop-types": "off",
    "react/display-name": "off",
    "linebreak-style": "off",
    "no-nested-ternary": "off",
    "consistent-return": "off",
    "no-use-before-define": "error",
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": [".js", ".jsx", ".css", ".scss", ".png"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".css", ".scss", ".png"],
      },
    },
  },
  globals: {
    // NextJs does not require you to import React into each component. so suppress errors for missing 'import React' in files.
    React: "writable",
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
};
