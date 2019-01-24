import React from "react";
import PropTypes from "prop-types";

import ArticleModel from "models/Article";
import Link from "./Link";
import Article from "./Article";
import FetchError from "./FetchError";

const ArticleList = ({
  articles,
  showLink,
  onLoadArticlesClick,
  onMarkAsReadClick,
  errorMsg
}) => (
  <div>
    <h2>Articles</h2>

    {errorMsg && !articles.length ? <FetchError msg={errorMsg} /> : ""}

    {showLink ? (
      <Link active={false} onClick={onLoadArticlesClick}>
        Load Articles
      </Link>
    ) : (
      ""
    )}

    {articles.map(article => (
      <Article
        key={article.id}
        {...article}
        onMarkAsReadClick={onMarkAsReadClick}
      />
    ))}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.instanceOf(ArticleModel)).isRequired,
  showLink: PropTypes.bool.isRequired,
  onLoadArticlesClick: PropTypes.func.isRequired,
  onMarkAsReadClick: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
};

export default ArticleList;
