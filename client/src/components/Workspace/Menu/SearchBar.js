import React, { useState } from "react";
import {
  showSearchResults,
  quoteViewerOn,
  resetTagFilter,
  resetSourceFilter,
  resetActiveFilters,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../../helpers/sortSearch";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const sourcesState = useSelector((state) => state.sources);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText !== undefined) {
      const searchArray = searchData(searchText, quotesState, sourcesState);
      setSearchText("");
      dispatch(showSearchResults(searchArray));
      dispatch(quoteViewerOn());
      dispatch(resetTagFilter());
      dispatch(resetSourceFilter());
      dispatch(resetActiveFilters());
    }
  };
  searchData(
    "my giant     starfish  is a dog petzold",
    quotesState,
    sourcesState
  );

  return (
    <React.Fragment>
      <input
        type="text"
        value={searchText}
        className="ws-menu-left-items-search-bar"
        placeholder="search by keyword..."
        name="search"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </React.Fragment>
  );
};

export default SearchBar;
