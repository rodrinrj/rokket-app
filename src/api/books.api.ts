import { showActionSuccess } from "../helpers/notifications.helper";
import { Book } from "../modules/books/models/Book";
import {
  IBooksResponse,
  IBookResponse,
} from "../modules/books/models/response";
import http from "./http.provider";

export const fetchBooks = (): Promise<IBooksResponse> =>
  http.get(`/books`).then(({ data }) => data);

export const fetchBookById = (bookId: string): Promise<IBookResponse> =>
  http.get(`/books/${bookId}`).then(({ data }) => data);

export const updateBookById = (book: Book): Promise<IBookResponse> =>
  http.patch(`/books/${book._id}`, book).then(({ data }) => {
    showActionSuccess();
    return data;
  });

export const createBook = (book: Book): Promise<IBookResponse> =>
  http.post(`/books`, book).then(({ data }) => {
    showActionSuccess();
    return data;
  });

export const deleteBookById = (bookId: string) =>
  http.delete(`/books/${bookId}`).then(({ status }) => {
    showActionSuccess();
    return status;
  });
