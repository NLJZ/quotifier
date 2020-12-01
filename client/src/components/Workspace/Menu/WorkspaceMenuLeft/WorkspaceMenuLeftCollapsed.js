import React from "react";
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

        <li className="ws-menu-left-items-button-big-col tooltip">
          <NewQuoteButtonCollapsed /> <span class="tooltiptext">New Quote</span>
        </li>

        <li className="ws-menu-left-items-button-big-col tooltip">
          <NewSourceButtonCollapsed />{" "}
          <span class="tooltiptext">New Source</span>
        </li>

        <li className="ws-menu-left-items-button-big-col tooltip">
          <FavoriteQuotesCollapsed />
          <span class="tooltiptext">Favourite Quotes</span>
        </li>

        <li className="ws-menu-left-items-button-big-col tooltip">
          <RecentQuotesCollapsed />{" "}
          <span class="tooltiptext">Recent Quotes</span>
        </li>

        <li className="ws-menu-left-items-button-big-col tooltip">
          <AllQuotesCollapsed />
          <span class="tooltiptext">All Quotes</span>
        </li>
      </ul>
    </>
  );
};

export default WorkspaceMenuLeftCollapsed;
