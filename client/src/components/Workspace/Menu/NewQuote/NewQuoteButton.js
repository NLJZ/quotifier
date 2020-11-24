import React, { useState, useRef, useEffect } from "react";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
//-----components--------------------------
import NewQuoteForm from "./NewQuoteForm";

function NewQuoteFormButton() {
  const [isActive, setIsActive] = useState(false);
  const onCloseClick = () => setIsActive(false);
  const onOpenClick = () => setIsActive(true);

  return (
    <div className="nq-form-container">
      <button
        onClick={onOpenClick}
        className="ws-menu-left-items-button-new-quote nq-form-trigger"
      >
        <FontAwesomeIcon className="test-test" icon={faPlus} />
        new quote
      </button>

      <div className={`nq-form ${isActive ? "active" : "inactive"}`}>
        <NewQuoteForm closeForm={onCloseClick} isActive={isActive} />

        <button onClick={onCloseClick} className="nq-form-button-close">
          <FontAwesomeIcon className="test-test" icon={faTimes} />
        </button>
      </div>
    </div>
  );
}

export default NewQuoteFormButton;
