import { Book } from "../../modules/books/models/Book";
import * as actionTypes from "./Books.actions";
import BooksActionTypes from "./Books.types";

export type BooksState = Book[];
const initialState: BooksState = [];

const BooksReducer = (
  state: BooksState = initialState,
  action: BooksActionTypes
): Book[] => {
  switch (action.type) {
    case actionTypes.SET_BOOKS: {
      return action.payload.books;
    }
    case actionTypes.CREATE_BOOK: {
      return [...state, action.payload.book];
    }
    case actionTypes.UPDATE_BOOK: {
      return state.map((book) => {
        return book._id === action.payload.book._id
          ? { ...book, ...action.payload.book }
          : book;
      });
    }
    case actionTypes.DELETE_BOOK: {
      return state.filter(({ _id }) => _id !== action.payload.bookId);
    }
    default:
      return state;
  }
};

export default BooksReducer;
