import { createStore, compose } from "redux";

import { isProd } from "helpers/common";
import rootReducer from "reducers/page1";

/* eslint-disable no-underscore-dangle */
const enhancers = compose(
  !isProd() && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);
/* eslint-enable no-underscore-dangle */

const store = createStore(rootReducer, undefined, enhancers);

export default store;
