import {createStore} from 'redux';

import rootReducer from 'reducers/index';

const defaultState = {
  articles: []
};
const store = createStore(rootReducer, defaultState);

export default store;