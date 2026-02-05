import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Custom overrides
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Integrate Prettier as ESLint rule
      "prettier/prettier": [
        "warn",
        { singleQuote: true, semi: true, endOfLine: "auto" },
      ],

      // TypeScript tweaks
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },

  // Override default ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
]);
