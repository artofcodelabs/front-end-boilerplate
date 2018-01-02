import React from 'react';
import PropTypes from 'prop-types';

import ArticleModel from 'models/Article';
import Article from './Article';

class ArticleList extends React.Component{
  link(){
    if(this.props.articles.length > 0)
      return
    return(
      <a
        href=''
        onClick={e => {
          e.preventDefault()
          this.props.onLoadArticlesClick()
        }}
      >
        Load Articles
      </a>
    )
  }

  render(){
    return(
      <div>
        {this.link()}
        {this.props.articles.map(article =>
          <Article
            key={article.id}
            {...article}
            markAsRead={this.props.onMarkAsReadClick}
          />
        )}
      </div>
    )
  }
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.instanceOf(ArticleModel)
  ).isRequired,
  onLoadArticlesClick: PropTypes.func.isRequired,
  onMarkAsReadClick: PropTypes.func.isRequired
};

export default ArticleList;