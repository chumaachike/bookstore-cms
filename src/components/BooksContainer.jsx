import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';
import { getAllBooks } from '../redux/books/books';

function BooksContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);
  const allBooks = useSelector((state) => state.Book);
  const renderedItems = allBooks.map((book) => (
    <Book title={book.title} author={book.author} key={book.item_id} id={book.item_id} />
  ));
  return (
    <div>
      {renderedItems}
      <BookForm />
    </div>
  );
}

export default BooksContainer;
