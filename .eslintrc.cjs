/** @type {import("eslint").Linter.BaseConfig} */

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks"
  ],
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"],
    "no-console": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "comma-dangle": "off",
    "import/no-unresolved": "off",
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".ts", ".tsx"]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
