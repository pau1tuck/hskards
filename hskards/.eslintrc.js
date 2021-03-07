module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "airbnb-typescript-prettier",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": [0],
    "import/prefer-default-export": "off",
    "max-classes-per-file": [1],
    "class-methods-use-this": [0],
    "@typescript-eslint/no-unused-vars": [0],
    "@typescript-eslint/no-explicit-any": [0],
  },
};
