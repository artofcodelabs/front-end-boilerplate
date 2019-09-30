/* eslint-env node */

module.exports = {
  ident: "postcss",
  sourceMap: true,
  plugins: [
    require("autoprefixer"),
    require("postcss-custom-properties"),
    require("postcss-flexbugs-fixes"),
    require("postcss-nested")
  ]
};
