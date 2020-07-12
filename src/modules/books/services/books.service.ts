import { Dispatch } from "redux";
import * as Api from "../../../api/books.api";
import { showNetworkError } from "../../../helpers/notifications.helper";
import { ActionCreator } from "../../../redux-store/actions";
import { Book } from "../models/Book";
import { Filter } from "../models/Filter";
import { BookFilters } from "../../../redux-store/filter/Filter.actions";

export const fetchBooks = (dispatch: Dispatch<any>) =>
  Api.fetchBooks()
    .then((res) => dispatch(ActionCreator.setBooks(res.books)))
    .catch(() => showNetworkError());

export const createBook = (dispatch: Dispatch<any>, book: Book) =>
  Api.createBook(book)
    .then((res) => dispatch(ActionCreator.createBook(res.book)))
    .catch(() => showNetworkError());

export const deleteBook = (dispatch: Dispatch<any>, bookId: string) =>
  Api.deleteBookById(bookId)
    .then(() => dispatch(ActionCreator.deleteBook(bookId)))
    .catch(() => showNetworkError());

export const updateBook = (dispatch: Dispatch<any>, book: Book) =>
  Api.updateBookById(book)
    .then((res) => dispatch(ActionCreator.updateBook(res.book)))
    .catch(() => showNetworkError());

export const setFilter = (dispatch: Dispatch<any>, filter: Filter) =>
  dispatch(ActionCreator.setFilter(filter));

export const getFilteredBooks = (books: Book[], filter: Filter): Book[] => {
  switch (filter.value) {
    case BookFilters.ALL_BOOKS_FILTER: {
      return books;
    }
    case BookFilters.FINISHED_FILTER: {
      return books.filter((book) => book.state === "finished");
    }
    case BookFilters.READING_FILTER: {
      return books.filter((book) => book.state === "reading");
    }
    case BookFilters.WISHING_FILTER: {
      return books.filter((book) => book.state === "wishing");
    }
    default: {
      return books;
    }
  }
};
