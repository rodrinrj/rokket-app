import { Book } from "../../modules/books/models/Book";
import * as actionTypes from "./Books.actions";
import BooksActionTypes from "./Books.types";

export const setBooks = (books: Book[]): BooksActionTypes => ({
  type: actionTypes.SET_BOOKS,
  payload: {
    books,
  },
});

export const createBook = (book: Book): BooksActionTypes => ({
  type: actionTypes.CREATE_BOOK,
  payload: {
    book,
  },
});

export const updateBook = (book: Book): BooksActionTypes => ({
  type: actionTypes.UPDATE_BOOK,
  payload: {
    book,
  },
});

export const deleteBook = (bookId: string) => ({
  type: actionTypes.DELETE_BOOK,
  payload: {
    bookId,
  },
});
