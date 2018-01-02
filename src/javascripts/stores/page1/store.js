import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers/page1/index';

const defaultState = {
  articles: []
};
const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;