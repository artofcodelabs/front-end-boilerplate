import Article from "models/Article";
import store from "stores/page1/store";

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
      type: "FETCH_ARTICLES_FAILURE",
      msg: "Something went wrong",
    });
  }
};

const showAll = () => {
  show();
  loadArticles();
};

const showRead = () => show("SHOW_READ");

const showUnread = () => {
  show("SHOW_UNREAD");
  loadArticles();
};

export { showAll, showRead, showUnread };
