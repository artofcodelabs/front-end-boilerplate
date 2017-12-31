import React from 'react';

class Article extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {id, title, author, publishedAt, content} = this.props;
    return(
      <article id={`article_${id}`} key={id}>
        <h3>{title}</h3>
        <p>
          <i>
            {author} wrote this on {publishedAt.toLocaleDateString('pl')}
          </i>
        </p>
        <p>{content}</p>
      </article>
    )
  }
}

export default Article;