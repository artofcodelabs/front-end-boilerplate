import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component{
  markAsReadLink(){
    if(this.props.read)
      return
    return(
      <p>
        <a
          href=''
          onClick={e => {
            e.preventDefault()
            this.props.markAsRead(this.props.id)
          }}
        >
          Mark as read
        </a>
      </p>
    )
  }

  render(){
    const {id, title, author, publishedAt, content, read} = this.props;
    return(
      <article id={`article_${id}`}>
        <h3>{title}</h3>
        <p>
          <i>{author} wrote this on {publishedAt.toLocaleDateString('pl')}</i>
        </p>
        <p>{content}</p>
        {this.markAsReadLink()}
      </article>
    )
  }
}

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  markAsRead: PropTypes.func.isRequired
};

export default Article;