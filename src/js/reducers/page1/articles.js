import { combineReducers } from "redux";
import produce from "immer";

import Article from "models/Article";

const resources = produce((draft = [], action) => {
  switch (action.type) {
    case "ADD_ARTICLES":
      return draft.concat(action.articles);
    case "MARK_AS_READ": {
      const current = draft.find((a) => a.id === action.id);
      const newArticle = new Article({ ...current, read: true });
      draft[draft.indexOf(current)] = newArticle;
      break;
    }
    default:
      return draft;
  }
});

const errorMsg = (state = null, action) => {
  switch (action.type) {
    case "FETCH_ARTICLES_FAILURE":
      return action.msg;
    default:
      return state;
  }
};

const articles = combineReducers({
  resources,
  errorMsg,
});

export default articles;
