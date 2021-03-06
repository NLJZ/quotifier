import React from "react";
import {
  showAllQuotes,
  quoteViewerOn,
  resetTagFilter,
  resetSourceFilter,
  resetActiveFilters,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const AllQuotes = () => {
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const showQuotes = () => {
    dispatch(showAllQuotes(quotesState));
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
        icon={faEye}
      />{" "}
    </React.Fragment>
  );
};

export default AllQuotes;
