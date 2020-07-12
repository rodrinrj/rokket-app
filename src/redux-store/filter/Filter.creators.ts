import { Filter } from "../../modules/books/models/Filter";
import * as actionTypes from "./Filter.actions";
import FilterActionTypes from "./Filter.types";

export const setFilter = (filter: Filter): FilterActionTypes => ({
  type: actionTypes.SET_BOOKS_FILTER,
  payload: {
    filter,
  },
});
