import App from './js/app.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode enabled.');
}

const app = new App;
app.run();