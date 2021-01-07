import { combineReducers } from "redux";
import lists from "./listsReducer";
import list from "./listReducer";

const rootReducer = combineReducers({
  lists,
  list,
});

export default rootReducer;
