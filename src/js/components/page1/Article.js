import React from "react";
import PropTypes from "prop-types";

import Link from "./Link";

const Article = ({
  id,
  title,
  author,
  publishedAt,
  content,
  read,
  onMarkAsReadClick,
}) => (
  <article id={`article_${id}`} className="mb-2">
    <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>

    <p className="mb-1 text-sm text-gray-500">
      {author} wrote this on {publishedAt.toLocaleDateString("pl")}
    </p>

    <p className="text-gray-900">{content}</p>

    {!read ? (
      <p>
        <Link active={false} onClick={onMarkAsReadClick.bind(null, id)}>
          Mark as read
        </Link>
      </p>
    ) : (
      ""
    )}
  </article>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  onMarkAsReadClick: PropTypes.func.isRequired,
};

export default Article;
