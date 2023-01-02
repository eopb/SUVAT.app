module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": ["error", {
      "ignores": ["about", "About", "Mathr", "Solution", "Asutat2", "Asvtat2", "Sv2u22as", "Vvuat", "Ssutat2"]
    }]
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
