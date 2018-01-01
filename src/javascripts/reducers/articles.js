const articles = (state = [], action) => {
  switch(action.type){
    case 'ADD_ARTICLES':
      return [...state, ...action.articles];
    default:
      return state;
  }
};

export default articles;