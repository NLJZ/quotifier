import React from "react";
import {
  showRecentQuotes,
  quoteViewerOn,
  resetTagFilter,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const RecentQuotes = () => {
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const showQuotes = () => {
    dispatch(showRecentQuotes(quotesState));
    dispatch(quoteViewerOn());
    dispatch(resetTagFilter());
  };
  return (
    <React.Fragment>
      <li className="ws-menu-left-items-link">
        <button onClick={showQuotes} type="submit">
          Recent
        </button>
      </li>
    </React.Fragment>
  );
};

export default RecentQuotes;
