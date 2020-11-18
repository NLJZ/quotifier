import isLogged from "./isLogged";
import userName from "./userData";
import quotes from "./getUserQuotes";
import sources from "./getUserSources";
import filteredQuotes from "./filteredQuotes";
import favorites from "./getFaves";
import quoteViewer from "./views";
import tags from "./tagsReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  userName,
  isLogged,
  quotes,
  sources,
  tags,
  favorites,
  filteredQuotes,
  quoteViewer,
});

const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
