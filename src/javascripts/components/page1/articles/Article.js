import React from 'react';

class Article extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <article id={`article_${this.props.id}`} key={this.props.id}>
        <h3>{this.props.title}</h3>
        <p>
          <i>
            {this.props.author} wrote this on {this.props.publishedAt.toLocaleDateString('pl')}
          </i>
        </p>
        <p>{this.props.content}</p>
      </article>
    )
  }
}

export default Article;