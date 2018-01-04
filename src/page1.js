import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import 'config';
import {main} from 'helpers/common.js'
import store from 'stores/page1/store';
import App from 'containers/page1/App';

import 'shared/index.css';
import 'page1.sass';

main();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);