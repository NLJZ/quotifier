import React from "react";
import { showAllQuotes, quoteViewerOn } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AllQuotes = () => {
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const allQuotes = Object.keys(quotesState);
  const showQuotes = () => {
    console.log(allQuotes);
    dispatch(showAllQuotes(allQuotes));
    dispatch(quoteViewerOn());
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
