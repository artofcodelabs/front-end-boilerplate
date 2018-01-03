import {connect} from 'react-redux';

import {getVisibleArticles, shouldShowLoadArticlesLink} from 'reducers/page1';
import {loadArticles, markAsRead} from 'actions/page1/articles';
import ArticleList from 'components/page1/ArticleList';

const mapStateToProps = state => ({
  articles: getVisibleArticles(state),
  showLink: shouldShowLoadArticlesLink(state)
});

const VisibleArticleList = connect(
  mapStateToProps,
  { onLoadArticlesClick: loadArticles,
    onMarkAsReadClick: markAsRead
  }
)(ArticleList);

export default VisibleArticleList;