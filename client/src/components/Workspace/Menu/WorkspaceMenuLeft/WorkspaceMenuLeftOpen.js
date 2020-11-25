import React, { useState, useRef, Fragment } from "react";
//-------------components----------------------------------
import AllQuotes from "../AllQuotes.js";
import NewSourceFormButton from "../NewSource/NewSourceButton.js";
import NewQuoteFormButton from "../NewQuote/NewQuoteButton.js";
import RecentQuotes from "../RecentQuotes";
import FavoriteQuotes from "../FavoriteQuotes";

const WorkspaceMenuLeftOpen = () => {
  const [isActive, setIsActive] = useState(false);
  const onClickInactive = () => setIsActive(true);
  return (
    <>
      <ul className="ws-menu-left-items ws-menu-left-container">
        <li className="ws-menu-left-items-button-big ws-menu-left-items-search-li">
          <input
            type="text"
            className="ws-menu-left-items-search-bar"
            placeholder="find a quote"
            name="search"
          />
        </li>

        <li className="ws-menu-left-items-button-big ">
          <NewQuoteFormButton />
        </li>

        <li className="ws-menu-left-items-button-big ">
          <NewSourceFormButton />
        </li>

        <li className="ws-menu-left-items-link">
          <FavoriteQuotes />
        </li>

        <li className="ws-menu-left-items-link">
          <RecentQuotes />
        </li>

        <li className="ws-menu-left-items-link">
          <AllQuotes />
        </li>

        <li className="ws-menu-left-items-link folder-menu"></li>
      </ul>{" "}
    </>
  );
};

export default WorkspaceMenuLeftOpen;
