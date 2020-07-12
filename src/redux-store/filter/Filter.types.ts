import { Filter } from "../../modules/books/models/Filter";
import * as actionTypes from "./Filter.actions";

type FilterActionTypes = ISetFilter;

interface ISetFilter {
  type: typeof actionTypes.SET_BOOKS_FILTER;
  payload: {
    filter: Filter;
  };
}

export default FilterActionTypes;
