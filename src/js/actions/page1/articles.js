import store from "stores/page1/store";
import Article from "models/Article";

const show = (filter = "SHOW_ALL") => {
  store.dispatch({
    type: "SET_VISIBILITY_FILTER",
    filter,
  });
};

const loadArticles = async () => {
  if (store.getState().articles.resources.length > 0) return;

  try {
    const resp = await Article.all({ resource: "main" });
    store.dispatch({
      type: "ARTICLES.ADD",
      articles: resp.resources,
    });
  } catch (err) {
    store.dispatch({
      type: "ARTICLES.FETCH_FAILURE",
      msg: "Something went wrong",
    });
  }
};

const showAll = () => {
  show();
  loadArticles();
  return null;
};

const showRead = () => {
  show("SHOW_READ");
  return null;
};

const showUnread = () => {
  show("SHOW_UNREAD");
  loadArticles();
  return null;
};

export { showAll, showRead, showUnread };
