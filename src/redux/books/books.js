/* eslint-disable default-param-last */
// AddBooks action type
import { apiAddBook, apiGetBooks, apiRemoveBook } from '../../utils/api';

const ADD = 'bookstore-cms/books/ADD_BOOK';
const REMOVE = 'bookstore-cms/Book/REMOVE_BOOK';
const GET = 'bookstore-cms/Book/GET_ALL_BOOKS';

export const addBooks = (book) => async (dispatch) => {
  apiAddBook(book);
  dispatch({ type: ADD, payload: book });
};

export const getAllBooks = () => async (dispatch) => {
  const data = await apiGetBooks();
  const books = Object.keys(data).map((key) => {
    const book = data[key][0];
    book.item_id = key;
    return book;
  });
  dispatch({ type: GET, payload: books });
};

export const removeBook = (book) => async (dispatch) => {
  await apiRemoveBook(book);
  dispatch({ type: REMOVE, payload: book });
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((item) => item.item_id !== action.payload);
    case GET:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
