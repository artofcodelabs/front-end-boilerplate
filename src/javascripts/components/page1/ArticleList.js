import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import ArticleModel from 'models/Article';
import Article from './Article';

const ArticleList = ({articles, showLink, onLoadArticlesClick, onMarkAsReadClick}) => (
  <div>
    <h2>Articles</h2>

    {showLink
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
        onMarkAsReadClick={onMarkAsReadClick}
      />
    )}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.instanceOf(ArticleModel)
  ).isRequired,
  showLink: PropTypes.bool.isRequired,
  onLoadArticlesClick: PropTypes.func.isRequired,
  onMarkAsReadClick: PropTypes.func.isRequired
};

export default ArticleList;