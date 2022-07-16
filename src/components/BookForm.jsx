import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBooks } from '../redux/books/books';

function BooksContainer() {
  const [author, addAuthor] = useState('');
  const [title, addTitle] = useState('');
  const dispatch = useDispatch();
  const changeTitle = (event) => {
    addTitle(event.target.value);
  };
  const changeAuthor = (event) => {
    addAuthor(event.target.value);
  };
  const submitBook = (event) => {
    event.preventDefault();
    if (author.trim() !== '' && title.trim() !== '') {
      dispatch(addBooks({
        item_id: uuid(),
        author,
        title,
        category: 'Fiction',
      }));
      addTitle('');
      addAuthor('');
    }
  };
  return (
    <form onSubmit={submitBook}>
      <h3>ADD NEW BOOK</h3>
      <input type="text" placeholder="Book Title" value={title} onChange={changeTitle} />
      <input type="text" placeholder="Author" value={author} onChange={changeAuthor} />
      <button type="submit">Button</button>
    </form>
  );
}

export default BooksContainer;
