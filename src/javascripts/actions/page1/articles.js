import Article from 'models/Article';

export const loadArticles = () => (
  async (dispatch) => {
    try {
      const resp = await Article.all({resource: 'main'});
      dispatch(addArticles(resp.resources));
    } catch(error) {
      alert("Can't connect with server.");
      console.log("Failed!", error);
    }
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