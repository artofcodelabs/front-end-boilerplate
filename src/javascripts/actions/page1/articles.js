import Article from 'models/Article';

export const loadArticles = () => (
  (dispatch) => {
    Article.all({resource: 'main'})
    .then((resp) => {
      dispatch(addArticles(resp.resources));
    })
    .catch((error) => {
      console.log("Failed!", error);
    });
  }
);

export const addArticles = articles => ({
  type: 'ADD_ARTICLES',
  articles
});

export const markAsRead = id => ({
  type: 'MARK_AS_READ',
  id: id
});