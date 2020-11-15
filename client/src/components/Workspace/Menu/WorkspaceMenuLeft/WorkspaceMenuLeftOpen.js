import React, { useState, useRef, Fragment } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
//-------------components----------------------------------
import AllQuotes from "../AllQuotes.js";
import NewQuoteFormButton from "../NewQuoteButton.js";

const WorkspaceMenuLeftOpen = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClickDrop = () => setIsActive(!isActive);
  // const iconSearch = <FontAwesomeIcon className="test-test" icon={faSearch} />;
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
          {" "}
          <NewQuoteFormButton />
        </li>

        <li className="ws-menu-left-items-button-big ">
          <button className="ws-menu-left-items-button-new-quote">
            <FontAwesomeIcon className="test-test" icon={faPlus} />
            new source
          </button>
        </li>

        <li className="ws-menu-left-items-link">
          <button
            className="ws-menu-left-items-button menu-left-trigger"
            onClick={onClickDrop}
          >
            <FontAwesomeIcon
              className={`ws-menu-left-icon-single ${
                isActive ? "active" : "inactive"
              }`}
              icon={faPlay}
            />
          </button>
          Favourites
        </li>

        <ul
          ref={dropdownRef}
          className={`ws-menu-left ${isActive ? "active" : "inactive"}`}
        >
          <li>
            <Link to="/lastquote1">last quote 1 </Link>
          </li>
          <li>
            <Link to="/lastquote2">last quote 2 </Link>
          </li>
          <li>
            <Link to="/lastquote3">last quote 3 </Link>
          </li>
        </ul>

        <li className="ws-menu-left-items-link">
          <Link to="/recent">Recent </Link>
        </li>

        <AllQuotes />

        <li className="ws-menu-left-items-link folder-menu"></li>
      </ul>{" "}
    </>
  );
};

export default WorkspaceMenuLeftOpen;
