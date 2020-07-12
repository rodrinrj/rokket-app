import { combineReducers } from "redux";
import BooksReducer from "./books/Books.reducer";
import FilterReducer from "./filter/Filter.reducer";

const rootReducer = combineReducers({
  filter: FilterReducer,
  books: BooksReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
