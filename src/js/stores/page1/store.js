import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { isProd } from "helpers/common";
import rootReducer from "reducers/page1";

/* eslint-disable no-underscore-dangle */
const enhancers = compose(
  applyMiddleware(thunk),
  !isProd() && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);
/* eslint-enable no-underscore-dangle */

const store = createStore(rootReducer, undefined, enhancers);

export default store;
