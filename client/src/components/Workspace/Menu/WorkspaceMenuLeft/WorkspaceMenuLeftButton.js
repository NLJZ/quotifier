import React, { useState, useRef } from "react";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderMinus } from "@fortawesome/free-solid-svg-icons";

const WorkspaceMenuLeftButton = () => {
  return (
    <button className="ws-menu-left-icon-folder icon-folder-trigger">
      <FontAwesomeIcon className="icn-folder" icon={faFolderMinus} />
    </button>
  );
};

export default WorkspaceMenuLeftButton;
