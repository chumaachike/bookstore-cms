import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBooks } from '../redux/books/books';
import styles from './Book.module.css';

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
    <div className={styles.tyt}>
      <h3 className={styles.formTitle}>ADD NEW BOOK</h3>
      <form className={styles.formContainer} onSubmit={submitBook}>
        <input type="text" className={styles.inputTextBox} placeholder="Book Title" value={title} onChange={changeTitle} />
        <input type="text" className={styles.inputTextBox} placeholder="Author" value={author} onChange={changeAuthor} />
        <button className={styles.addBookButton} type="submit">Button</button>
      </form>
    </div>
  );
}

export default BooksContainer;
