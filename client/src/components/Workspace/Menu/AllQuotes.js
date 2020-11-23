import React from "react";
import {
  showAllQuotes,
  quoteViewerOn,
  resetTagFilter,
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
  };
  return (
    <React.Fragment>
      <li className="ws-menu-left-items-link">
        <button onClick={showQuotes} type="submit">
          <FontAwesomeIcon className="test-test" icon={faEye} /> All Quotes
        </button>
      </li>
    </React.Fragment>
  );
};

export default AllQuotes;
