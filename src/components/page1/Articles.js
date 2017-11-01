import React from 'react';
import Article from '../../models/article';

class Articles extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount(){
    Article.all({resource: 'main'})
    .then((resp) => {
      this.setState({articles: resp.resources});
    })
    .catch((error) => {
      console.log("Failed!", error);
    });
  }

  loader(){
    if(this.state.articles.length !== 0)
      return
    return <p>Loading articles...</p>
  }

  render(){
    return(
      <div>
        {this.loader()}
        {this.state.articles.map(article =>
          <article id={`article_${article.id}`} key={article.id}>
            <h3>{article.title}</h3>
            <p>
              <i>
                {article.author} wrote this on {article.publishedAt.toLocaleDateString('pl')}
              </i>
            </p>
            <p>{article.content}</p>
          </article>
        )}
      </div>
    )
  }
}

export default Articles;