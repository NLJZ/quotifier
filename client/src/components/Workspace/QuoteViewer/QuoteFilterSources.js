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
  const sourceFilterArray = useSelector((state) => state.sourceFilter);
  const sources = useSelector((state) => state.sources);
  const sourcesArray = Object.values(sources);
  console.log(sourcesArray);
  const [show, setShow] = useState(false);

  const showIt = () => {
    setShow(!show);
  };

  const handleClick = (source) => {
    dispatch(addToSourceFilter(source));
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
    let sourceId = source;
    let filteredSourceTitle = sources[sourceId].sourceTitle;
    console.log(`filtered source title = ${filteredSourceTitle}`);
    return <li key={i}>{filteredSourceTitle}</li>;
  });

  const renderSources = sourcesArray.map((source, i) => {
    if (!sourceFilterArray.includes(source._id)) {
      return (
        <li key={i} onClick={() => handleClick(`${source._id}`)}>
          {source.sourceTitle}
        </li>
      );
    }
  });

  return (
    <section className="filter-container">
      <div className="tagsDropdown">
        <button onClick={showIt}>sources</button>
        <div className={`tagsFilter ${show ? "show" : "hide"}`}>
          <button>APPLY</button>
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
    </section>
  );
};

export default QuoteFilterSources;
