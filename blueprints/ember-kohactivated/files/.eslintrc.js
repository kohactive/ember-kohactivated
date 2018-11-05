module.exports = {
  globals: {
    server: true
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["ember"],
  extends: ["eslint:recommended", "plugin:ember/recommended"],
  env: {
    browser: true
  },
  rules: {
    "array-bracket-spacing": [
      "error",
      "never",
      {
        arraysInArrays: false,
        objectsInArrays: false
      }
    ],
    "array-callback-return": ["error"],
    "comma-dangle": ["error", "never"],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "dot-notation": ["error"],
    "ember/avoid-leaking-state-in-ember-objects": ["error"],
    "ember/named-functions-in-promises": [
      "error",
      {
        allowSimpleArrowFunction: true
      }
    ],
    "ember/order-in-components": ["error"],
    "ember/order-in-controllers": ["error"],
    "ember/order-in-models": ["error"],
    "ember/order-in-routes": ["error"],
    "eol-last": ["error", "always"],
    eqeqeq: ["error"],
    indent: ["error", 2, { VariableDeclarator: { var: 2, let: 2, const: 3 } }],
    "max-depth": ["error", 4],
    "no-duplicate-imports": ["error"],
    "no-else-return": [
      "error",
      {
        allowElseIf: true
      }
    ],
    "no-loop-func": ["error"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1
      }
    ],
    "no-trailing-spaces": ["error"],
    "no-var": ["error"],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: false,
        objectsInObjects: true
      }
    ],
    "padding-line-between-statements": ["error"],
    "prefer-destructuring": ["error"],
    "prefer-template": ["error"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "spaced-comment": ["error", "always"],
    "template-curly-spacing": ["error", "never"]
  },
  overrides: [
    // node files
    {
      files: [
        ".template-lintrc.js",
        "ember-cli-build.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "lib/*/index.js"
      ],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
