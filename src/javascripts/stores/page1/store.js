import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {isProd} from 'helpers/common';
import rootReducer from 'reducers/page1';

const enhancers = compose(
  applyMiddleware(thunk),
  (!isProd() && window.devToolsExtension) ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, undefined, enhancers);

export default store;