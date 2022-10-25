module.exports = {
  ident: "postcss",
  sourceMap: true,
  plugins: [
    require("postcss-nested"),
    require("postcss-import"),
    require("autoprefixer"),
  ],
};
