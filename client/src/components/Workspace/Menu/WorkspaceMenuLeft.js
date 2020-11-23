import React, { useState, useRef, Fragment } from "react";
//-------------components----------------------------------
import WorkspaceMenuLeftOpen from "./WorkspaceMenuLeft/WorkspaceMenuLeftOpen";
import WorkspaceMenuLeftCollapsed from "./WorkspaceMenuLeft/WorkspaceMenuLeftCollapsed";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderMinus, faFolderPlus } from "@fortawesome/free-solid-svg-icons";

const WorkspaceMenuLeftItems = () => {
  // const dropdownRef = useRef(null);
  const [isClosed, setIsClosed] = useState(false);
  const onClickClose = () => setIsClosed(!isClosed);

  let WorkspaceMenuLeft = <WorkspaceMenuLeftOpen />;
  if (isClosed) {
    WorkspaceMenuLeft = <WorkspaceMenuLeftCollapsed />;
  }

  let WorkspaceMenuLeftButton = (
    <FontAwesomeIcon className="icn-folder" icon={faFolderMinus} />
  );
  if (isClosed) {
    WorkspaceMenuLeftButton = (
      <FontAwesomeIcon className="icn-folder" icon={faFolderPlus} />
    );
  }

  return (
    <React.Fragment>
      {WorkspaceMenuLeft}
      <button className="ws-menu-left-icon-folder" onClick={onClickClose}>
        {WorkspaceMenuLeftButton}
      </button>
    </React.Fragment>
  );
};

export default WorkspaceMenuLeftItems;
