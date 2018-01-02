import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';

const Article = ({id, title, author, publishedAt, content, read, onMarkAsReadClick}) => (
  <article id={`article_${id}`}>
    <h3>{title}</h3>

    <p>
      <i>{author} wrote this on {publishedAt.toLocaleDateString('pl')}</i>
    </p>

    <p>{content}</p>

    {!read
      ? <p>
          <Link
            active={false}
            onClick={onMarkAsReadClick.bind(null, id)}
          >
            Mark as read
          </Link>
        </p>
      : ''
    }
  </article>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  onMarkAsReadClick: PropTypes.func.isRequired
};

export default Article;