import Article from "models/Article";

export const loadArticles = () => async dispatch => {
  try {
    const resp = await Article.all({ resource: "main" });
    dispatch({
      type: "ADD_ARTICLES",
      articles: resp.resources
    });
  } catch (err) {
    dispatch({
      type: "FETCH_ARTICLES_FAILURE",
      msg: "Something went wrong"
    });
  }
};

export const markAsRead = id => ({
  type: "MARK_AS_READ",
  id
});
