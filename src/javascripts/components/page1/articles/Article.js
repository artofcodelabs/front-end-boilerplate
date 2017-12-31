import React from 'react';

const Article = ({id, title, author, publishedAt, content}) => (
  <article id={`article_${id}`}>
    <h3>{title}</h3>
    <p>
      <i>{author} wrote this on {publishedAt.toLocaleDateString('pl')}</i>
    </p>
    <p>{content}</p>
  </article>
);

export default Article;