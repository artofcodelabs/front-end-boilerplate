import Article from 'models/Article';

export function loadArticles() {
 return (dispatch) => {
    Article.all({resource: 'main'})
    .then((resp) => {
      dispatch(addArticles(resp.resources));
    })
    .catch((error) => {
      console.log("Failed!", error);
    });
  }
}

export function addArticles(articles) {
  return {
    type: 'ADD_ARTICLES',
    articles
  }
}

export function markAsRead(id) {
  return {
    type: 'MARK_AS_READ',
    id: id
  }
}