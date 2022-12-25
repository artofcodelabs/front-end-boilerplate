import { combineReducers } from "redux";
import produce from "immer";

import Article from "models/Article";

const resources = produce((draft = [], action) => {
  switch (action.type) {
    case "ARTICLES.ADD":
      return draft.concat(action.articles);
    case "ARTICLES.UPDATE": {
      const current = draft.find((a) => a.id === action.id);
      const newArticle = new Article({ ...current });
      for (const attr of Object.keys(action.changes)) {
        newArticle[attr] = action.changes[attr][1];
      }
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
