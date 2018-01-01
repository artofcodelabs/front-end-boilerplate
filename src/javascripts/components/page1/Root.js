import React from 'react';

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
    return(
      <div>
        <Nav page='page1' />

        <h2>Assets</h2>
        <p className='with-background with-border'>{`4 squared is ${square(4)}`}</p>
        <p className='with-border'><img src={Logo} alt='logo' /></p>

        <h2>Articles</h2>
        <ArticleList
          articles={this.props.articles}
          loadArticles={this.props.loadArticles}
          markAsRead={this.props.markAsRead}
        />

        {this.footer()}
      </div>
    )
  }
}

export default Root;