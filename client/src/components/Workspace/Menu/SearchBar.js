import React, { useState } from "react";
import {
  showRecentQuotes,
  quoteViewerOn,
  resetTagFilter,
  resetSourceFilter,
  resetActiveFilters,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const showQuotes = () => {
    dispatch(showRecentQuotes(quotesState));
    dispatch(quoteViewerOn());
    dispatch(resetTagFilter());
    dispatch(resetSourceFilter());
    dispatch(resetActiveFilters());
  };
  return (
    <React.Fragment>
      <input
        type="text"
        value={searchText}
        className="ws-menu-left-items-search-bar"
        placeholder="find a quote"
        name="search"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </React.Fragment>
  );
};

export default SearchBar;
