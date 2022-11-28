import { combineReducers } from "redux";

import articles, * as fromArticles from "./articles";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  articles,
  visibilityFilter,
});

export default rootReducer;

export const anyArticles = (state) => fromArticles.anyArticles(state.articles);

export const getErrorMsg = (state) => fromArticles.getErrorMsg(state.articles);
