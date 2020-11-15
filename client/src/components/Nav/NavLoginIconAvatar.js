import React, { useState, useRef, useEffect } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

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
    <div className="dropdown-menu1-container">
      <button onClick={onClick} className="dropdown-menu1-trigger">
        <FontAwesomeIcon
          className="ws-menu-top-icon-single"
          icon={faUserCircle}
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`dropdown-menu1 ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <Link to="/Profile">Profile </Link>
          </li>
          <li>
            <Link to="/settings">Settings </Link>
          </li>
          <li>
            <Link to="/something else">something else </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLoginIconAvatar;
