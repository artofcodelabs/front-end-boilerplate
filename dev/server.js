const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const setRoutes = require('./router');

const app = express();
const config = require('../webpack.dev.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

setRoutes(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
