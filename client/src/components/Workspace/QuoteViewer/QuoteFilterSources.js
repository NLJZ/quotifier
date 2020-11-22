import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterQuotesBySource,
  showAllQuotes,
  showFavoriteQuotes,
  showRecentQuotes,
  addToSourceFilter,
  resetSourceFilter,
} from "../../../redux/actions/";

const QuoteFilterSources = (props) => {
  const dispatch = useDispatch();
  const currentView = props.currentView;
  const quotesState = useSelector((state) => state.quotes);
  const sourceFilterArray = useSelector((state) => state.tagFilter);
  const sources = useSelector((state) => state.tags);
  const [show, setShow] = useState(false);

  const handleClick = (tag) => {
    dispatch(addToSourceFilter(tag));
  };

  const showIt = () => {
    setShow(!show);
  };

  const showAll = () => {
    if (currentView === "all") {
      dispatch(showAllQuotes(quotesState));
    } else if (currentView === "recent") {
      dispatch(showRecentQuotes(quotesState));
    } else if (currentView === "favorites") {
      dispatch(showFavoriteQuotes(quotesState));
    }
  };

  const apply = () => {
    showAll();
    dispatch(filterQuotesBySource(sourceFilterArray));
    showIt();
  };

  const reset = () => {
    dispatch(resetSourceFilter());
    showAll();
  };

  const renderFilterSources = sourceFilterArray.map((source, i) => {
    return <li key={i}>{source}</li>;
  });

  const renderSources = sources.map((source, i) => {
    if (!sourceFilterArray.includes(source)) {
      return (
        <li key={i} onClick={() => handleClick(`${source}`)}>
          {source}
        </li>
      );
    }
  });

  return (
    <section className="filter-container">
      <div className="tagsDropdown">
        <button onClick={showIt}>Tags</button>
        <div className={`tagsFilter ${show ? "show" : "hide"}`}>
          <button onClick={apply}>APPLY</button>
          <button onClick={reset}>CLEAR</button>
          <ul className="filter-tags-list">
            <li>Added:</li>
            {renderFilterSources}
          </ul>
          <ul className="tags-list">
            <li>Add To Filter:</li>
            {renderSources}
          </ul>
          <button>Run Filter</button>
        </div>
      </div>
      <div className="sourcesFilter"></div>
    </section>
  );
};

export default QuoteFilterSources;
