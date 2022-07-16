import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>{author}</p>
      <ul>
        <li>Comments</li>
        <li><button type="button" onClick={remove} id={id}>Remove</button></li>
        <li>Edit</li>
      </ul>

    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
