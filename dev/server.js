const rootPath = '..';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const Router = require('./router');

const app = express();
const config = require(`${rootPath}/webpack.dev.js`);
const compiler = webpack(config);
const router = new Router(app);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

router.setRoutes();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
