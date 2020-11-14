import React, { useState, useRef, useEffect } from "react";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function NewQuoteFormButton() {
  const [isActive, setIsActive] = useState(false);
  const handleOpenCloseOnClick = () => setIsActive(!isActive);

  return (
    <div className="new-quote-form-container">
//     Buton
      <button
        onClick={handleOpenCloseOnClick}
        className="workspace-menu-left-items-button-new-quote new-quote-form-trigger"
      >
        <FontAwesomeIcon className="test-test" icon={faPlus} />
        new quote
      </button>

      <div className={`new-quote-form ${isActive ? "active" : "inactive"}`}>
        <form className="new-quote-form-form">
          <p className="new-quote-form-text">Quote</p>
          <input
            type="firstName"
            name="firstName"
            className="input new-quote-form-input-quote"
            placeholder="firstName"
            autoComplete="on"
            required
          />

          <p className="new-quote-form-text">Author</p>
          <input
            type="firstName"
            name="firstName"
            className="input"
            placeholder="firstName"
            autoComplete="on"
            required
          />
          <p className="new-quote-form-text">Title</p>

          <input
            type="firstName"
            name="firstName"
            className="input new-quote-form-input"
            placeholder="firstName"
            autoComplete="on"
            required
          />
          <p className="new-quote-form-text">Year</p>

          <input
            type="firstName"
            name="firstName"
            className="input"
            placeholder="firstName"
            autoComplete="on"
            required
          />
          <button
            className="new-quote-form-button"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
        <button onClick={handleOpenCloseOnClick} className="new-quote-form-button-close">
          close
        </button>
      </div>
    </div>
  );
}

export default NewQuoteFormButton;
