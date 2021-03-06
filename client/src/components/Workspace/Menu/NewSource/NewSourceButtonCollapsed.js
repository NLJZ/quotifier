import React, { useState } from "react";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
//-----components--------------------------
import NewSourceForm from "./NewSourceForm";

function NewSourceFormButton() {
  const [isActive, setIsActive] = useState(false);
  const onOpenCloseClick = () => setIsActive(!isActive);

  return (
    <div className="nq-form-container nqf-collapsed">
      <FontAwesomeIcon
        onClick={onOpenCloseClick}
        className="test-test"
        icon={faPlus}
      />

      {isActive ? (
        <div className={`nq-form ${isActive ? "active" : "inactive"}`}>
          <NewSourceForm closeForm={onOpenCloseClick} isActive={isActive} />

          <button onClick={onOpenCloseClick} className="ns-form-button-close">
            <FontAwesomeIcon className="test-test" icon={faTimes} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default NewSourceFormButton;
