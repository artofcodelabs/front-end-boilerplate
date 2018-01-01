import React from 'react';
import Nav from 'components/shared/Nav';
import {square} from 'helpers/math';
import Logo from 'logo.png';
import Article from 'models/Article';
import ArticleList from './articles/List';

class Root extends React.Component{
  componentDidMount(){
    Article.all({resource: 'main'})
    .then((resp) => {
      this.props.addArticles(resp.resources);
    })
    .catch((error) => {
      console.log("Failed!", error);
    });
  }

  render(){
    return(
      <div>
        <Nav page='page1' />

        <h2>Assets</h2>
        <p className='with-background with-border'>{`4 squared is ${square(4)}`}</p>
        <p className='with-border'><img src={Logo} alt='logo' /></p>

        <h2>Articles</h2>
        <ArticleList articles={this.props.articles} />
      </div>
    )
  }
}

export default Root;