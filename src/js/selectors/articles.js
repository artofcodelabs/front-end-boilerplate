export const getVisibleArticles = (state) => {
  const articles = state.articles.resources;
  const filter = state.visibilityFilter;

  switch (filter) {
    case "SHOW_READ":
      return articles.filter((a) => a.read);
    case "SHOW_UNREAD":
      return articles.filter((a) => !a.read);
    case "SHOW_ALL":
    default:
      return articles;
  }
};

export const anyArticles = (state) => state.articles.resources.length > 0;

export const getErrorMsg = (state) => state.articles.errorMsg;
