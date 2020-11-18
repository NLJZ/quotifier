import React, { useState, useRef, Fragment } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faSearch,
  faFolderMinus,
} from "@fortawesome/free-solid-svg-icons";
//-------------components----------------------------------
import AllQuotes from "./AllQuotes.js";
import NewQuoteFormButton from "./NewQuoteButton.js";

const WorkspaceMenuLeftItems = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <ul className="workspace-menu-left-items menu-left-container">
      <li className="workspace-menu-left-items-button-big ">
        {" "}
        <NewQuoteFormButton />
      </li>

      <li className="workspace-menu-left-items-button-big ">
        <button className="workspace-menu-left-items-button-new-quote">
          <FontAwesomeIcon className="test-test" icon={faPlus} />
          new source
        </button>
      </li>

      <li className="workspace-menu-left-items-button-big ">
        <button className="workspace-menu-left-items-button-new-quote">
          <FontAwesomeIcon className="test-test" icon={faSearch} />
          find quote
        </button>
      </li>

      <li className="workspace-menu-left-items-link">
        <button
          className="workspace-menu-left-items-button menu-left-trigger"
          onClick={onClick}
        >
          <FontAwesomeIcon
            className={`workspace-menu-left-icon-single ${
              isActive ? "active" : "inactive"
            }`}
            icon={faPlay}
          />
        </button>
        Favourites
      </li>

      <ul
        ref={dropdownRef}
        className={`menu-left ${isActive ? "active" : "inactive"}`}
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

      <li className="workspace-menu-left-items-link">
        <Link to="/recent">Recent </Link>
      </li>

      <AllQuotes />

      <li className="workspace-menu-left-items-link">
        <button>
          {" "}
          <FontAwesomeIcon
            className="workspace-menu-left-icon-folder"
            icon={faFolderMinus}
          />
        </button>
      </li>
    </ul>
  );
};

export default WorkspaceMenuLeftItems;
