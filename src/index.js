import React from 'react';
import { render } from 'react-dom';

import App from './js/app.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode enabled.');
}

const app = new App;
app.run();

const Root = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

render(<Root />, document.getElementById('root'));