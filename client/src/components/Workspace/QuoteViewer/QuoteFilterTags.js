import React, { useState } from "react";
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
  const [show, setShow] = useState(false);
  const quotesState = useSelector((state) => state.quotes);
  const tagFilterArray = useSelector((state) => state.tagFilter);
  const tags = useSelector((state) => state.tags);

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
    </section>
  );
};

export default QuoteFilterTags;
