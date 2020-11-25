import React, { useState, useRef, Fragment } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faStar,
  faEye,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";

const WorkspaceMenuLeftCollapsed = () => {
  // const dropdownRef = useRef(null);
  // const [isActive, setIsActive] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const onClickOpen = () => setIsOpen(!isOpen);
  // const onClickDrop = () => setIsActive(!isActive);
  // const iconSearch = <FontAwesomeIcon className="test-test" icon={faSearch} />;
  return (
    <>
      <ul className="ws-menu-left-items menu-left-container">
        <li className="ws-menu-left-items-button-big-col ws-menu-left-items-search-li">
          <FontAwesomeIcon className="test-test" icon={faSearch} />
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <FontAwesomeIcon className="test-test" icon={faPlus} />
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <FontAwesomeIcon className="test-test" icon={faPlus} />
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <FontAwesomeIcon className="test-test" icon={faStar} />
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <FontAwesomeIcon className="test-test" icon={faBinoculars} />
        </li>

        <li className="ws-menu-left-items-button-big-col">
          <FontAwesomeIcon className="test-test" icon={faEye} />
        </li>
      </ul>
    </>
  );
};

export default WorkspaceMenuLeftCollapsed;
