import React from 'react';

function BooksContainer() {
  return (
    <form>
      <h3>ADD NEW BOOK</h3>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Button</button>
    </form>
  );
}

export default BooksContainer;
