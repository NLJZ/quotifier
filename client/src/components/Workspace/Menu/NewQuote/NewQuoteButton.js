import React, { useState, useRef, useEffect } from "react";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//-----components--------------------------
import NewQuoteForm from "./NewQuoteForm";

function NewQuoteFormButton() {
  const [isActive, setIsActive] = useState(false);
  const onOpenCloseClick = () => setIsActive(!isActive);

  return (
    <div className="new-quote-form-container">
      <button
        onClick={onOpenCloseClick}
        className="ws-menu-left-items-button-new-quote new-quote-form-trigger"
      >
        <FontAwesomeIcon className="test-test" icon={faPlus} />
        new quote
      </button>

      <div className={`new-quote-form ${isActive ? "active" : "inactive"}`}>
        <NewQuoteForm />

        {/* <form className="new-quote-form-form">
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
        </form> */}

        <button
          onClick={onOpenCloseClick}
          className="new-quote-form-button-close"
        >
          close
        </button>
      </div>
    </div>
  );
}

export default NewQuoteFormButton;