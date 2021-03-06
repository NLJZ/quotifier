import isLogged from "./isLogged";
import userName from "./userData";
import quotes from "./getUserQuotes";
import sources from "./getUserSources";
import filteredQuotes from "./filteredQuotes";
import favorites from "./getFaves";
import quoteViewer from "./views";
import currentView from "./currentView";
import tags from "./tagsReducer";
import workspaceHeader from "./headerText";
import tagFilter from "./tagFilter";
import sourceFilter from "./sourceFilter";
import activeFilters from "./activeFilters";
import lastSearch from "./lastSearched";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  userName,
  isLogged,
  quotes,
  sources,
  tags,
  favorites,
  filteredQuotes,
  lastSearch,
  tagFilter,
  sourceFilter,
  activeFilters,
  quoteViewer,
  currentView,
  workspaceHeader,
});

const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
