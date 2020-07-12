import { Filter } from "../../modules/books/models/Filter";
import * as actionTypes from "./Filter.actions";
import FilterActionTypes from "./Filter.types";

export type FilterState = Filter;
const initialState: FilterState = {
  title: "Todos",
  value: actionTypes.BookFilters.ALL_BOOKS_FILTER,
};

const FilterReducer = (
  state: FilterState = initialState,
  action: FilterActionTypes
): Filter => {
  switch (action.type) {
    case actionTypes.SET_BOOKS_FILTER: {
      return action.payload.filter;
    }
    default:
      return state;
  }
};

export default FilterReducer;
