import { combineReducers } from "redux";

import articles from "./articles";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  articles,
  visibilityFilter,
});

export default rootReducer;
