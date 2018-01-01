import React from 'react';
import Nav from 'components/shared/Nav';
import {square} from 'helpers/math';
import Logo from 'logo.png';
import ArticleList from './articles/List';

class Root extends React.Component{
  render(){
    return(
      <div>
        <Nav page='page1' />

        <h2>Assets</h2>
        <p className='with-background with-border'>{`4 squared is ${square(4)}`}</p>
        <p className='with-border'><img src={Logo} alt='logo' /></p>

        <h2>Articles</h2>
        <ArticleList articles={this.props.articles} loadArticles={this.props.loadArticles} />
      </div>
    )
  }
}

export default Root;