import {connect} from 'react-redux';

import {loadArticles, markAsRead} from 'actions/index';
import ArticleList from 'components/page1/ArticleList';

const mapStateToProps = state => (
  { articles: state.articles
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