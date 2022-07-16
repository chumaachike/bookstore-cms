import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';

function BooksContainer() {
  const allBooks = useSelector((state) => state.Book);
  const renderedItems = allBooks.map((book) => (
    <Book title={book.title} author={book.author} key={book.id} id={book.id} />
  ));
  return (
    <div>
      {renderedItems}
      <BookForm />
    </div>
  );
}

export default BooksContainer;
