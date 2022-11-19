import Article from "models/Article";
import store from "stores/page1/store";

const loadArticles = async () => {
  try {
    const resp = await Article.all({ resource: "main" });
    store.dispatch({
      type: "ADD_ARTICLES",
      articles: resp.resources,
    });
  } catch (err) {
    store.dispatch({
      type: "FETCH_ARTICLES_FAILURE",
      msg: "Something went wrong",
    });
  }
};

export { loadArticles };
