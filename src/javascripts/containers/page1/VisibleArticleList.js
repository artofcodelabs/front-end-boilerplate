import {connect} from 'react-redux';

import {loadArticles, markAsRead} from 'actions/page1/articles';
import ArticleList from 'components/page1/ArticleList';

const getReadArticles = (articles, visibilityFilter) => {
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

const mapStateToProps = state => (
  { articles: getReadArticles(state.articles, state.visibilityFilter)
  }
);

const mapDispatchToProps = dispatch => (
  { onLoadArticlesClick: () => {
      dispatch(loadArticles())
    },
    onMarkAsReadClick: id => {
      dispatch(markAsRead(id))
    }
  }
);

const VisibleArticleList = connect(mapStateToProps, mapDispatchToProps)(ArticleList);

export default VisibleArticleList;