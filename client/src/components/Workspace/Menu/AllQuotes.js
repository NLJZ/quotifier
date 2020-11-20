import React from "react";
import {
  showAllQuotes,
  quoteViewerOn,
  resetTagFilter,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AllQuotes = () => {
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const showQuotes = () => {
    dispatch(showAllQuotes(quotesState));
    dispatch(quoteViewerOn());
    dispatch(resetTagFilter());
  };
  return (
    <React.Fragment>
      <li className="ws-menu-left-items-link">
        <button onClick={showQuotes} type="submit">
          All Quotes
        </button>
      </li>
    </React.Fragment>
  );
};

export default AllQuotes;
