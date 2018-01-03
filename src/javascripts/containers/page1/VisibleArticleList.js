import {connect} from 'react-redux';

import {loadArticles, markAsRead} from 'actions/page1/articles';
import ArticleList from 'components/page1/ArticleList';

const getVisibleArticles = (articles, visibilityFilter) => {
  switch(visibilityFilter){
    case 'SHOW_READ':
      return articles.filter(a => a.read)
    case 'SHOW_UNREAD':
      return articles.filter(a => !a.read)
    case 'SHOW_ALL':
    default:
      return articles
  }
};

const mapStateToProps = state => ({
  articles: getVisibleArticles(state.articles, state.visibilityFilter),
  showLink: state.articles.length === 0
});

const mapDispatchToProps = dispatch => ({
  onLoadArticlesClick() {
    dispatch(loadArticles());
  },
  onMarkAsReadClick(id) {
    dispatch(markAsRead(id));
  }
});

const VisibleArticleList = connect(mapStateToProps, mapDispatchToProps)(ArticleList);

export default VisibleArticleList;