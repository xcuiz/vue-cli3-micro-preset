const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier", "plugin:import/errors", "plugin:import/warnings"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'no-console': isProduction ? 'error' : 0,
    'no-debugger': 'error',
    'vue/require-default-prop': 0,
    'vue/order-in-components': 'error',
    'vue/no-template-shadow': 0,
    'no-useless-escape': 0,
    'no-empty': ['error', { "allowEmptyCatch": true }]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    }
  },
  globals: {
    _: true,
    $: true
  }
};
