import React from "react";
import {
  showAllQuotes,
  quoteViewerOn,
  resetTagFilter,
  resetSourceFilter,
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
  };
  return (
    <React.Fragment>
      <button onClick={showQuotes} type="submit">
        <FontAwesomeIcon className="test-test" icon={faEye} /> All Quotes
      </button>
    </React.Fragment>
  );
};

export default AllQuotes;
