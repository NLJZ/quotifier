import React from "react";
import { showFavoriteQuotes, quoteViewerOn } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const RecentQuotes = () => {
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const showQuotes = () => {
    dispatch(showFavoriteQuotes(quotesState));
    dispatch(quoteViewerOn());
  };
  return (
    <React.Fragment>
      <li className="ws-menu-left-items-link">
        <button onClick={showQuotes} type="submit">
          Favorites
        </button>
      </li>
    </React.Fragment>
  );
};

export default RecentQuotes;
