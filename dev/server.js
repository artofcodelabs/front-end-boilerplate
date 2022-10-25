const express = require('express');
const setRoutes = require('./router');

const opts = process.argv.slice(2)
  .map(s => s.split('='))
  .filter(arr => arr[0].startsWith('--'))
  .map(arr => [arr[0].slice(2), arr[1]])
  .reduce((acc, arr) => {
    acc[arr[0]] = arr[1];
    return acc;
  }, {});

const app = express();

switch (opts.env) {
  case 'development': {
    const config = require('../webpack.dev.js');
    const compiler = require('webpack')(config);

    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));

    console.log('Server runs in dev mode.');
    break;
  }
}

app.use(express.static('public'));
setRoutes(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});
