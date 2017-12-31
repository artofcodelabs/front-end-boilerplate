import React from 'react';
import Article from './Article';

class List extends React.Component{
  constructor(props){
    super(props);
  }

  loader(){
    if(this.props.articles.length === 0)
      return <p>Loading articles...</p>
  }

  render(){
    return(
      <div>
        {this.loader()}
        {this.props.articles.map(article => <Article key={article.id} {...article} />)}
      </div>
    )
  }
}

export default List;