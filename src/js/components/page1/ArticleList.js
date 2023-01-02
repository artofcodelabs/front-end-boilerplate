import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import ArticleModel from "models/Article";
import Article from "./Article";

const ArticleList = ({ articles, showLink, onMarkAsReadClick, errorMsg }) => (
  <div>
    {showLink ? "" : <h2>Articles</h2>}

    {errorMsg && !articles.length ? (
      <p style={{ color: "red" }}>{errorMsg}</p>
    ) : (
      ""
    )}

    {showLink ? <NavLink to={"/page1/all"}>Load Articles</NavLink> : ""}

    {articles.map((article) => (
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
  onMarkAsReadClick: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
};

export default ArticleList;
