/* eslint-disable default-param-last */
// AddBooks action type
const ADD = 'bookstore-cms/books/ADD_BOOK';
const REMOVE = 'bookstore-cms/Book/REMOVE_BOOK';

export const addBooks = (book) => ({
  type: ADD,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  payload: book,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
