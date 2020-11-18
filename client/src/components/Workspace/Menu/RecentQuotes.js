import React from "react";
import { showRecentQuotes, quoteViewerOn } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const RecentQuotes = () => {
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const showQuotes = () => {
    dispatch(showRecentQuotes(quotesState));
    dispatch(quoteViewerOn());
  };
  return (
    <React.Fragment>
      <li className="workspace-menu-left-items-link">
        <button onClick={showQuotes} type="submit">
          Recent
        </button>
      </li>
    </React.Fragment>
  );
};

export default RecentQuotes;
