import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';
import { getAllBooks } from '../redux/books/books';
import styles from './Book.module.css';

function BooksContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);
  const allBooks = useSelector((state) => state.Book);
  const renderedItems = allBooks.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      key={book.item_id}
      id={book.item_id}
      category={book.category}
    />
  ));
  return (
    <div className={styles.BookSetionContainer}>
      <ul className={styles.books}>
        {renderedItems}
      </ul>
      <div className="horizontal-divider" />
      <BookForm />
    </div>
  );
}

export default BooksContainer;
