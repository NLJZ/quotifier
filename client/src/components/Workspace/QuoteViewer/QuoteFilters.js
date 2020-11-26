import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterQuotesByTag,
  showAllQuotes,
  showFavoriteQuotes,
  showRecentQuotes,
  addToTagFilter,
  resetTagFilter,
  addToSourceFilter,
  resetSourceFilter,
} from "../../../redux/actions/";

const QuoteFilterTags = (props) => {
  const dispatch = useDispatch();
  const currentView = props.currentView;
  const [show, setShow] = useState(false);
  const [showSources, setShowSources] = useState(false);
  const quotesState = useSelector((state) => state.quotes);
  const tagFilterArray = useSelector((state) => state.tagFilter);
  const tags = useSelector((state) => state.tags);
  const sourceFilterArray = useSelector((state) => state.sourceFilter);
  const sources = useSelector((state) => Object.values(state.sources));

  const handleClick = (tag) => {
    dispatch(addToTagFilter(tag));
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
  // Tag methods
  const apply = () => {
    showAll();
    if (!tagFilterArray.length < 1) {
      dispatch(filterQuotesByTag(tagFilterArray));
    }
    showIt();
  };

  const reset = () => {
    dispatch(resetTagFilter());
    showAll();
  };

  const renderFilterTags = tagFilterArray.map((tag, i) => {
    return (
      <li className="tags" key={i}>
        {tag}
      </li>
    );
  });

  const renderTags = tags.map((tag, i) => {
    if (!tagFilterArray.includes(tag)) {
      return (
        <li className="tags" key={i} onClick={() => handleClick(`${tag}`)}>
          {tag}
        </li>
      );
    } else {
      return null;
    }
  });

  //source methods

  const handleClickSource = (source) => {
    dispatch(addToSourceFilter(source));
  };

  const showSourceOptions = () => {
    setShowSources(!showSources);
  };

  const applySourceFilter = () => {
    showAll();
    if (!tagFilterArray.length < 1) {
      // dispatch(filterQuotesBySource(sourceFilterArray));
    }
    showSourceOptions();
  };

  const resetSource = () => {
    dispatch(resetSourceFilter());
    showAll();
  };

  const renderFilterSources = sourceFilterArray.map((source, i) => {
    return (
      <li className="tags" key={i}>
        {source.sourceTitle}
      </li>
    );
  });

  const renderSources = sources.map((source, i) => {
    if (!sourceFilterArray.includes(source._id)) {
      return (
        <li className="tags" key={i} onClick={() => handleClickSource(source)}>
          {source.sourceTitle}
        </li>
      );
    } else {
      return null;
    }
  });

  // Source methods

  return (
    <section className="filter-container">
      <div className="tagsDropdown">
        <ul className="sort-filter-options">
          <li>filter by:</li>
          <li>
            <button onClick={showIt}>tag</button>
          </li>
        </ul>
        <div className={`tagsFilter ${show ? "show" : "hide"}`}>
          <div className="filter-button-holder">
            <button onClick={apply}>APPLY</button>
            <button onClick={reset}>CLEAR</button>
            <button onClick={showIt}>CLOSE</button>
          </div>
          <ul className="filter-tags-list">
            <li>Added:</li>
            {renderFilterTags}
          </ul>
          <hr />
          <ul className="tags-list">
            <li>Add To Filter:</li>
            {renderTags}
          </ul>
        </div>
      </div>
      {/* sources */}
      <div className="tagsDropdown">
        <ul className="sort-filter-options">
          <li>
            <button onClick={showSourceOptions}>source</button>
          </li>
        </ul>
        <div className={`tagsFilter ${showSources ? "show" : "hide"}`}>
          <div className="filter-button-holder">
            <button onClick={applySourceFilter}>APPLY</button>
            <button onClick={resetSource}>CLEAR</button>
            <button onClick={showSourceOptions}>CLOSE</button>
          </div>
          <ul className="filter-tags-list">
            <li>Added:</li>
            {renderFilterSources}
          </ul>
          <hr />
          <ul className="tags-list">
            <li>Add To Filter:</li>
            {renderSources}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuoteFilterTags;
