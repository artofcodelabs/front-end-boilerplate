const path = require('path');
const fs = require('fs');

const rootPath = '..';

class Router {
  constructor(app){
    this.app = app;
  }

  setRoutes(){
    this.app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, `${rootPath}/public/`));
    });

    this.app.get(/^\/index(\.html)?/, function(req, res) {
      res.sendFile(path.join(__dirname, `${rootPath}/public/index.html`));
    });

    this.app.get(/^\/page1(\.html)?/, function(req, res) {
      res.sendFile(path.join(__dirname, `${rootPath}/public/page1.html`));
    });

    this.app.get(/^\/(squaring|cubing)/, function(req, res) {
      res.sendFile(path.join(__dirname, `${rootPath}/public/index.html`));
    });

    this.app.get(/^\/articles(\.json)?/, function(req,res) {
      const filePath = path.join(__dirname, './server_responses/articles.json');
      const body = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      res.json(body);
    });

    this.app.get(/^\/[a-z]+$/, function(req, res) {
      res.sendFile(path.join(__dirname, `${rootPath}/public/index.html`));
    });
  }
}

module.exports = Router;