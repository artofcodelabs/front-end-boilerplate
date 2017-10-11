const path = require('path');

class Router {
  constructor(app){
    this.app = app;
  }

  setRoutes(){
    this.app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, './public/'));
    });

    this.app.get(/^\/index(\.html)?/, function(req, res) {
      res.sendFile(path.join(__dirname, './public/index.html'));
    });

    this.app.get(/^\/page1(\.html)?/, function(req, res) {
      res.sendFile(path.join(__dirname, './public/page1.html'));
    });

    this.app.get(/^\/(squaring|cubing)/, function(req, res) {
      res.sendFile(path.join(__dirname, './public/index.html'));
    });

    this.app.get(/^\/[a-z]+$/, function(req, res) {
      res.sendFile(path.join(__dirname, './public/index.html'));
    });
  }
}

module.exports = Router;