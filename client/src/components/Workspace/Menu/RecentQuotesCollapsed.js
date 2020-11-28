import React from "react";
import {
  showRecentQuotes,
  quoteViewerOn,
  resetTagFilter,
  resetSourceFilter,
  resetActiveFilters,
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
    dispatch(resetActiveFilters());
  };
  return (
    <React.Fragment>
      <FontAwesomeIcon
        onClick={showQuotes}
        className="test-test"
        icon={faBinoculars}
      />
    </React.Fragment>
  );
};

export default RecentQuotes;
