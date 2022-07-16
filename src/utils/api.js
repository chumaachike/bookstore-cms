/* eslint-disable import/prefer-default-export */
// const ID = '2vn8Ff9GJhQUZKiczvkw';

const BASEURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W3C4989buYUt3aoIkm1F/books';

export const apiCreateApp = async () => fetch(`${BASEURL}`, {
  method: 'POST',
  body: '',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const apiAddBook = async (book) => fetch(BASEURL, {
  method: 'POST',
  body: JSON.stringify(book),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.text())
  .catch((error) => {
    throw error;
  });

export const apiGetBooks = () => fetch(BASEURL)
  .then((response) => {
    const responseLength = Number(response.headers.get('content-length'));
    if (responseLength > 0) {
      return response.json();
    }
    return [];
  })
  .catch((error) => {
    throw error;
  });

export const apiRemoveBook = (idBook) => fetch(`${BASEURL}/${idBook}`, { method: 'DELETE' })
  .then((response) => {
    const responseLength = Number(response.headers.get('content-length'));
    if (responseLength > 0) {
      return response.text();
    }
    return '';
  })
  .catch((error) => {
    throw error;
  });
