import { Filter } from "../models/Filter";
import { BookFilters } from "../../../redux-store/filter/Filter.actions";

const allBooks: Filter = {
  title: "Todos",
  value: BookFilters.ALL_BOOKS_FILTER,
};
const readingBooks: Filter = {
  title: "Leyendo",
  value: BookFilters.READING_FILTER,
};
const wishingBooks: Filter = {
  title: "Por leer",
  value: BookFilters.WISHING_FILTER,
};
const finishedBooks: Filter = {
  title: "Finalizados",
  value: BookFilters.FINISHED_FILTER,
};

const filters = {
  allBooks,
  readingBooks,
  wishingBooks,
  finishedBooks,
};

export default filters;
