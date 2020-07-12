import * as BooksActions from "./books/Books.creators";
import * as FilterActions from "./filter/Filter.creators";

export const ActionCreator = {
  ...FilterActions,
  ...BooksActions,
};
