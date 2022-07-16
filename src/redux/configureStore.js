import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Book from './books/books';
import Categories from './categories/categories';

const store = configureStore({
  reducer: {
    Book, Categories,
  },
  middleware: [thunk],
});

export default store;
