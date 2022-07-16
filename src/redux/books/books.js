/* eslint-disable default-param-last */
// AddBooks action type
const ADD = 'bookstore-cms/books/ADD_BOOK';
const REMOVE = 'bookstore-cms/Book/REMOVE_BOOK';

const defaultBooks = [{
  id: '2',
  author: ' J.K. Rowling',
  title: 'Harry Potter',
},
{
  id: '4',
  author: 'JK Rowling',
  title: 'The Christmas Pig',
},
{
  id: '9',
  author: 'PM Narendra Modi',
  title: 'The Braille edition of the book Exam Warriors',
},
];

export const addBooks = (book) => ({
  type: ADD,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  payload: book,
});

const bookReducer = (state = defaultBooks, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
