module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    // allow async-await
    'generator-star-spacing': 'off',
    'no-tabs': 'off',
    // disallow control characters in regular expressions
    'no-control-regex': 'off',
    // disallow empty character classes in regular expressions
    'no-empty-character-class': 'off',
    //	disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 'off',
    // disallow multiple spaces in regular expressions
    'no-regex-spaces': 'off',
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'off',
    // allow debugger during development
    "quotes": [1, "single"],//引号类型 `` "" ''
    "semi": [2, "always"],//语句强制分号结尾
    "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
