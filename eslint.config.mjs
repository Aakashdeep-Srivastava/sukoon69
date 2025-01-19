import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react"],
    env: {
      browser: true,
      node: true,
      es6: true
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@next/next/no-img-element": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
          children: "never"
        }
      ],
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "prefer-const": "warn",
      "no-unused-expressions": "warn",
      "no-unreachable": "error",
      "eqeqeq": ["warn", "always"]
    },
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        rules: {
          "no-undef": "off"
        }
      }
    ],
    ignorePatterns: [
      "node_modules/",
      ".next/",
      "out/",
      "public/",
      "**/*.config.js",
      "**/*.config.ts"
    ]
  }
];

export default eslintConfig;