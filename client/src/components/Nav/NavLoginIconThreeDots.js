import React, { useState, useRef, useEffect } from "react";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
//-------------components-------------------
import LogOutButton from "./LogOutButton";

function NavLoginIconThreeDots() {
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
  //------------------------------------------------------------------------

  return (
    <div className="dd-menu-dts-container">
      <button onClick={onClick} className="dd-menu-dts-trigger">
        <FontAwesomeIcon
          className="ws-menu-top-icon-single"
          icon={faEllipsisV}
        />
      </button>

      <nav
        ref={dropdownRef}
        className={`dd-menu-dts ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <LogOutButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLoginIconThreeDots;
