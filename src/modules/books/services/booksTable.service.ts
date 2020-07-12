import { Book } from "../models/Book";
import { BookFilters } from "../../../redux-store/filter/Filter.actions";
import { Filter } from "../models/Filter";

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

export const convertState = (state: string) => {
  switch (state) {
    case "reading":
      return "Leyendo";
    case "wishing":
      return "Por leer";
    case "finished":
      return "Finalizado";
  }
};
