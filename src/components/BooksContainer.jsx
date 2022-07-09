import React from 'react';
import BookForm from './BookForm';
import Book from './Book';

function BooksContainer() {
  return (
    <div>
      <Book title="Harry Potter" author="JK Rowling" />
      <BookForm />
    </div>
  );
}

export default BooksContainer;
