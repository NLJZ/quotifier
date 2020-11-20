import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterQuotesByTag,
  showAllQuotes,
  showFavoriteQuotes,
  showRecentQuotes,
  addToTagFilter,
  resetTagFilter,
} from "../../../redux/actions/";

const QuoteFilterTags = (props) => {
  const dispatch = useDispatch();
  const currentView = props.currentView;
  const quotesState = useSelector((state) => state.quotes);
  const tagFilterArray = useSelector((state) => state.tagFilter);
  const tags = useSelector((state) => state.tags);
  const [show, setShow] = useState(false);

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

  const apply = () => {
    showAll();
    dispatch(filterQuotesByTag(tagFilterArray));
    showIt();
  };

  const reset = () => {
    dispatch(resetTagFilter());
    showAll();
  };

  const renderFilterTags = tagFilterArray.map((tag, i) => {
    return <li key={i}>{tag}</li>;
  });

  const renderTags = tags.map((tag, i) => {
    if (!tagFilterArray.includes(tag)) {
      return (
        <li key={i} onClick={() => handleClick(`${tag}`)}>
          {tag}
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
            {renderFilterTags}
          </ul>
          <ul className="tags-list">
            <li>Add To Filter:</li>
            {renderTags}
          </ul>
          <button>Run Filter</button>
        </div>
      </div>
      <div className="sourcesFilter"></div>
    </section>
  );
};

export default QuoteFilterTags;
