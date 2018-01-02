import React from 'react';
import PropTypes from 'prop-types';

import ArticleModel from 'models/Article';
import Nav from 'components/shared/Nav';
import ArticleList from './articles/List';
import Footer from './Footer';

import {square} from 'helpers/math';
import Logo from 'logo.png';

class Root extends React.Component{
  footer(){
    if(this.props.articles.length > 0)
      return <Footer />
  }

  render(){
    const {articles, loadArticles, markAsRead} = this.props;
    return(
      <div>
        <Nav page='page1' />

        <h2>Assets</h2>
        <p className='with-background with-border'>{`4 squared is ${square(4)}`}</p>
        <p className='with-border'><img src={Logo} alt='logo' /></p>

        <h2>Articles</h2>
        <ArticleList
          articles={articles}
          loadArticles={loadArticles}
          markAsRead={markAsRead}
        />

        {this.footer()}
      </div>
    )
  }
}

Root.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.instanceOf(ArticleModel)
  ).isRequired,
  loadArticles: PropTypes.func,
  markAsRead: PropTypes.func
};

export default Root;