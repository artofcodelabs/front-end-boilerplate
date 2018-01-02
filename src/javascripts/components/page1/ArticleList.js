import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import ArticleModel from 'models/Article';
import Article from './Article';

const ArticleList = ({articles, onLoadArticlesClick, onMarkAsReadClick}) => (
  <div>
    { articles.length == 0
        ? <Link
            active={false}
            onClick={onLoadArticlesClick}
          >
            Load Articles
          </Link>
        : ''
    }
    {articles.map(article =>
      <Article
        key={article.id}
        {...article}
        markAsRead={onMarkAsReadClick}
      />
    )}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.instanceOf(ArticleModel)
  ).isRequired,
  onLoadArticlesClick: PropTypes.func.isRequired,
  onMarkAsReadClick: PropTypes.func.isRequired
};

export default ArticleList;