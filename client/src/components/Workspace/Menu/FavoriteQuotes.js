import React from "react";
import { showFavoriteQuotes, quoteViewerOn } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon className="test-test" icon={faStar} />
          Favorites
        </button>
      </li>
    </React.Fragment>
  );
};

export default RecentQuotes;
