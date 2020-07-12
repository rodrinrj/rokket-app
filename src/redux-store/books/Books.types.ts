import { Book } from "../../modules/books/models/Book";
import * as actionTypes from "./Books.actions";

type BooksActionTypes =
  | ISetBooksAction
  | ICreateBookAction
  | IUpdateBookAction
  | IDeleteBookAction;

interface ISetBooksAction {
  type: typeof actionTypes.SET_BOOKS;
  payload: {
    books: Book[];
  };
}

interface ICreateBookAction {
  type: typeof actionTypes.CREATE_BOOK;
  payload: {
    book: Book;
  };
}

interface IUpdateBookAction {
  type: typeof actionTypes.UPDATE_BOOK;
  payload: {
    book: Book;
  };
}

interface IDeleteBookAction {
  type: typeof actionTypes.DELETE_BOOK;
  payload: {
    bookId: string;
  };
}

export default BooksActionTypes;
