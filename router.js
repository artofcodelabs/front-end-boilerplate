const path = require('path');

class Router {
  constructor(app){
    this.app = app;
  }

  setRoutes(){
    this.app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, './public/index.html'));
    });
    
    this.app.get('/index.html', function(req, res) {
      res.sendFile(path.join(__dirname, './public/index.html'));
    });
    
    this.app.get('/page1.html', function(req, res) {
      res.sendFile(path.join(__dirname, './public/page1.html'));
    });
  }
}

module.exports = Router;