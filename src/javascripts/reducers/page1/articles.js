import { combineReducers } from "redux";

import Article from "models/Article";

const resources = (state = [], action) => {
  switch (action.type) {
    case "ADD_ARTICLES":
      return [...state, ...action.articles];
    case "MARK_AS_READ":
      return state.map(
        article =>
          article.id === action.id
            ? new Article({ ...article, read: true })
            : article
      );
    default:
      return state;
  }
};

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
  errorMsg
});

export default articles;

export const getVisibleArticles = (state, filter) => {
  switch (filter) {
    case "SHOW_READ":
      return state.resources.filter(a => a.read);
    case "SHOW_UNREAD":
      return state.resources.filter(a => !a.read);
    case "SHOW_ALL":
    default:
      return state.resources;
  }
};

export const anyArticles = state => state.resources.length > 0;

export const getErrorMsg = state => state.errorMsg;
