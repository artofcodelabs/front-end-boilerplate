import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode enabled.');
}

render(<Root />, document.getElementById('root'));