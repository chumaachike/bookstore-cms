import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>{author}</p>
      <ul>
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>

    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
