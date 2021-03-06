module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended",
  ],
  "rules": {
    "import/no-unresolved": "off",
    "no-lonely-if": "off",
    "quotes": [
      "error", 
      "backtick",
      { "allowTemplateLiterals": true }
    ]
  }
}