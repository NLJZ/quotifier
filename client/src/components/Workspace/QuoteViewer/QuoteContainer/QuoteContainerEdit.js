import React, { useState, useRef, useEffect } from "react";
// import useKeypress from "./hooks/useKeypress";
// import useOnClickOutside from "./hooks/useOnClickOutside";

const QuoteContainerEdit = (props) => {
  const [isInputActive, setIsInputActive] = useState(false);

  const [inputValueSourceTitle, setInputValueSourceTitle] = useState(
    props.sourceTitle
  );
  console.log(inputValueSourceTitle);

  const [inputValueQuoteBody, setInputValueQuoteBody] = useState(
    props.quoteBody
  );
  console.log(inputValueQuoteBody);

  const [inputValueTags, setInputValueTags] = useState(props.tags);
  console.log(inputValueTags);

  const [inputValueQuoteNotes, setInputValueQuoteNotes] = useState(
    props.quoteNotes
  );
  console.log(inputValueQuoteNotes);

  const [inputValueQuoteLocation, setInputValueQuoteLocation] = useState(
    props.quoteLocation
  );
  console.log(inputValueQuoteLocation);

  const [inputValueSourceInfo, setInputValueSourceInfo] = useState(
    props.sourceInfo
  );
  console.log(inputValueSourceInfo);

  const inputRef = useRef(null);

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  //
  return (
    <React.Fragment>
      {/* <span className="inline-text" ref={wrapperRef}> */}
      <form className="inline-text">
        <span
          className={`qc-span inline-text_copy inline-text__copy--${
            !isInputActive ? "active" : "rest"
          }`}
        >
          <p className="bold">Source:</p>
          <input
            ref={inputRef}
            value={inputValueSourceTitle}
            onChange={(e) => {
              setInputValueSourceTitle(e.target.value);
            }}
            className={`qc-span inline-text_input inline-text_input--${
              isInputActive ? "active" : "hidden"
            }`}
          />
        </span>

        <span
          className={`qc-span inline-text_copy inline-text__copy--${
            !isInputActive ? "active" : "rest"
          }`}
        >
          <p className="bold">Quote:</p>
          <input
            ref={inputRef}
            type="text"
            value={inputValueQuoteBody}
            onChange={(e) => {
              setInputValueQuoteBody(e.target.value);
            }}
            className={`qc-span inline-text_input inline-text_input--${
              isInputActive ? "active" : "hidden"
            }`}
          />
        </span>

        <div className="qc-tags">
          <span
            className={`qc-span inline-text_copy inline-text__copy--${
              !isInputActive ? "active" : "rest"
            }`}
          >
            <p className="bold">Tags: </p>
            <div className="qc-tags-single ">{props.tags}</div>
          </span>
        </div>

        <span
          className={`qc-span inline-text_copy inline-text__copy--${
            !isInputActive ? "active" : "rest"
          }`}
        >
          <p className="bold">Notes:</p>{" "}
          <input
            ref={inputRef}
            value={inputValueQuoteNotes}
            onChange={(e) => {
              setInputValueQuoteNotes(e.target.value);
            }}
            className={`qc-span inline-text_input inline-text_input--${
              isInputActive ? "active" : "hidden"
            }`}
          />
        </span>

        <span
          className={`qc-span inline-text_copy inline-text__copy--${
            !isInputActive ? "active" : "rest"
          }`}
        >
          <p className="bold">Location:</p>{" "}
          <input
            ref={inputRef}
            value={inputValueQuoteLocation}
            onChange={(e) => {
              setInputValueQuoteLocation(e.target.value);
            }}
            className={`qc-span inline-text_input inline-text_input--${
              isInputActive ? "active" : "hidden"
            }`}
          />
        </span>

        <span
          className={`qc-span inline-text_copy inline-text__copy--${
            !isInputActive ? "active" : "rest"
          }`}
        >
          <p className="bold">Details:</p>{" "}
          <input
            ref={inputRef}
            // set the width to the input length multiplied by the x height
            // it's not quite right but gets it close

            value={inputValueSourceTitle}
            onChange={(e) => {
              setInputValueSourceTitle(e.target.value);
            }}
            className={`qc-span inline-text_input inline-text_input--${
              isInputActive ? "active" : "hidden"
            }`}
          />
        </span>
      </form>
    </React.Fragment>
  );
};

export default QuoteContainerEdit;
