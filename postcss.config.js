/* eslint-env node */

module.exports = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: "postcss",
  sourceMap: true,
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("autoprefixer")({
      flexbox: "no-2009"
    }),
    require("postcss-custom-properties"),
    require("postcss-nested")
  ]
};
