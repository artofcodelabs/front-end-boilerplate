import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import ArticleModel from "models/Article";
import Article from "./Article";
import Filter from "./Filter";

const ArticleList = ({ articles, showLink, onMarkAsReadClick, errorMsg }) => (
  <div>
    {!showLink ? <Filter /> : ""}

    {errorMsg && !articles.length ? (
      <p style={{ color: "red" }}>{errorMsg}</p>
    ) : (
      ""
    )}

    {showLink ? (
      <NavLink to={"/page1/articles/all"} className="link">
        Load Articles
      </NavLink>
    ) : (
      ""
    )}

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
