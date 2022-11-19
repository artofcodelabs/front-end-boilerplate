const path = require('path');
const fs = require('fs');

const rootPath = '..';

const setRoutes = (app) => {
  app.get('/', function(_, res) {
    res.sendFile(path.join(__dirname, `${rootPath}/public/`));
  });

  app.get(/^\/(squaring|cubing)/, function(_, res) {
    res.sendFile(path.join(__dirname, `${rootPath}/public/index.html`));
  });

  app.get(/^\/page1/, function(_, res) {
    res.sendFile(path.join(__dirname, `${rootPath}/public/page1.html`));
  });

  app.get(/^\/articles(\.json)?/, function(_, res) {
    const filePath = path.join(__dirname, './server_responses/articles.json');
    const body = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(body);
  });
};

module.exports = setRoutes;