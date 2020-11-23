import React, { useState, useRef, useEffect } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//----------------components-----------------------
import AllQuotes from "../Workspace/Menu/AllQuotes";
import NewSourceFormButton from "../Workspace/Menu/NewSource/NewSourceButton";
import NewQuoteFormButton from "../Workspace/Menu/NewQuote/NewQuoteButton";
import RecentQuotes from "../Workspace/Menu/RecentQuotes";
import FavoriteQuotes from "../Workspace/Menu/FavoriteQuotes";

function NavLoginIconAvatar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  //-----------if click somewhere else dropdown closes-------------------
  useEffect(() => {
    const pageClickEvent = (e) => {
      // if the active element  exists and is clicked outside of
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => window.removeEventListener("click", pageClickEvent);
  }, [isActive]);
  //------------------------------------------------------------------

  return (
    <div className="dd-resp-menu-container">
      <button onClick={onClick} className="dd-resp-menu-trigger">
        <FontAwesomeIcon className="ws-menu-top-icon-single" icon={faBars} />
      </button>
      <nav
        ref={dropdownRef}
        className={`dd-resp-menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li className="ws-resp-menu-items ws-menu-left-items-search-li">
            <input
              type="text"
              className="ws-menu-left-items-search-bar"
              placeholder="find a quote"
              name="search"
            />
          </li>
          <li className="ws-resp-menu-items ">
            <NewQuoteFormButton />
          </li>
          <li className="ws-resp-menu-items ">
            <NewSourceFormButton />
          </li>
          <li className="ws-resp-menu-items">
            <FavoriteQuotes />
          </li>
          <li className="ws-resp-menu-items">
            <RecentQuotes />
          </li>
          <li className="ws-resp-menu-items">
            <AllQuotes />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLoginIconAvatar;
