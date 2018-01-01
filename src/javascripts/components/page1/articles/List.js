import React from 'react';
import Article from './Article';

class List extends React.Component{
  link(){
    if(this.props.articles.length > 0)
      return
    return(
      <a
        href=''
        onClick={e => {
          e.preventDefault()
          this.props.loadArticles()
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
        {this.props.articles.map(article => <Article key={article.id} {...article} />)}
      </div>
    )
  }
}

export default List;