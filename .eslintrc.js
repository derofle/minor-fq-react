module.exports = {
    "extends": "airbnb-base",
    "globals": {
        "window": true,
        "document": true
      },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules" : {
        "indent": [2, "tab"],
        "no-console": 0,
        "max-len": 0,
        "arrow-parens": 0,
        "func-names": 0,
        "import/no-cycle": 0,
        "no-var": 0,
        "import/no-mutable-exports": 0,
        "quotes": ["error", "double", {"allowTemplateLiterals": true}],
        "no-tabs": 0,
        "no-plusplus": 0,
        "no-unused-vars": 0,
        "no-mixed-spaces-and-tabs": 0,
        "object-curly-newline": 0,
        "consistent-return": 0
    }
};