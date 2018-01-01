import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {main} from 'helpers/common.js'
import store from 'store';
import App from 'components/page1/App';

import 'shared/index.css';
import 'page1.sass';

main();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);