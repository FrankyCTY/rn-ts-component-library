module.exports = {
  extends: [
    "@soltalabs/eslint-config-react-native",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "func-names": 0,
    "import/no-extraneous-dependencies": 0,
    "import/order": 0,
    "react/display-name": 0,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": 1,
        "@typescript-eslint/explicit-module-boundary-types": 1,
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx",
          ".ttf",
          ".json",
          ".svg",
          ".png",
        ],
      },
    },
    "import/extensions": [".ts", ".tsx", ".js", ".jsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
