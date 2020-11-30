import React from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FavoriteQuotesCollapsed from "../FavoriteQuotesCollapsed";
import RecentQuotesCollapsed from "../RecentQuotesCollapsed";
import AllQuotesCollapsed from "../AllQuotesCollapsed";
import NewQuoteButtonCollapsed from "../NewQuote/NewQuoteButtonCollapsed";
import NewSourceButtonCollapsed from "../NewSource/NewSourceButtonCollapsed";

const WorkspaceMenuLeftCollapsed = () => {
  return (
    <>
      <ul className="ws-menu-left-items menu-left-container">
        <li className="ws-menu-left-items-button-big-col ws-menu-left-items-search-li">
          <FontAwesomeIcon className="test-test" icon={faSearch} />
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <NewQuoteButtonCollapsed />{" "}
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <NewSourceButtonCollapsed />{" "}
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <FavoriteQuotesCollapsed />
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <RecentQuotesCollapsed />{" "}
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <AllQuotesCollapsed />{" "}
        </li>
      </ul>
    </>
  );
};

export default WorkspaceMenuLeftCollapsed;
