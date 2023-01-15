import { combineReducers } from "redux";

import common from "../common";

import Article from "models/Article";

const errorMsg = (state = null, action) => {
  switch (action.type) {
    case "ARTICLES.FETCH_FAILURE":
      return action.msg;
    default:
      return state;
  }
};

const articles = combineReducers({
  resources: common(Article),
  errorMsg,
});

export default articles;
