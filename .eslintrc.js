module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  rules: {
    // todo: add custom rules here
  },
};
