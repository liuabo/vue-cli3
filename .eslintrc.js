module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    // 控制逗号前后的空格
    "comma-spacing": [2, { "before": false, "after": true }],
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [2, "never"],
    // 使用 === 替代 ==
    "eqeqeq": [2, "allow-null"],
    "no-alert": 0,//禁止使用alert confirm prompt
    "no-const-assign": 2,//禁止修改const声明的变量
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
    "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
