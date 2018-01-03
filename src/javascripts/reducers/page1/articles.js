import Article from 'models/Article';

const articles = (state = [], action) => {
  switch(action.type){
    case 'ADD_ARTICLES':
      return [...state, ...action.articles]
    case 'MARK_AS_READ':
      return state.map(article =>
        (article.id === action.id) ? new Article({...article, read: true}) : article
      )
    default:
      return state
  }
};

export default articles;

export const getVisibleArticles = (state, filter) => {
  switch(filter){
    case 'SHOW_READ':
      return state.filter(a => a.read)
    case 'SHOW_UNREAD':
      return state.filter(a => !a.read)
    case 'SHOW_ALL':
    default:
      return state
  }
};