import React from "react";
import {
  showRecentQuotes,
  quoteViewerOn,
  resetTagFilter,
  resetSourceFilter,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";

const RecentQuotes = () => {
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const showQuotes = () => {
    dispatch(showRecentQuotes(quotesState));
    dispatch(quoteViewerOn());
    dispatch(resetTagFilter());
    dispatch(resetSourceFilter());
  };
  return (
    <React.Fragment>
      <button onClick={showQuotes} type="submit">
        <FontAwesomeIcon className="test-test" icon={faBinoculars} />
        Recent
      </button>
    </React.Fragment>
  );
};

export default RecentQuotes;
