import {combineReducers} from 'redux';

import articles, * as fromArticles from './articles';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  articles,
  visibilityFilter
});

export default rootReducer;

export const getVisibleArticles = state => (
  fromArticles.getVisibleArticles(state.articles, state.visibilityFilter)
);

export const shouldShowLoadArticlesLink = state => (
  state.articles.length === 0
);