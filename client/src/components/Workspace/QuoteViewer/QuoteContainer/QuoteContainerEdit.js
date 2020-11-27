import React, { useState, useRef, useEffect } from "react";
import useKeypress from "./hooks/useKeypress";
import useOnClickOutside from "./hooks/useOnClickOutside";

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

  // get the the wrapping span node
  const wrapperRef = useRef(null);
  //   const textRef = useRef(null);
  const inputRef = useRef(null);

  const enter = useKeypress("Enter");
  const esc = useKeypress("Escape");

  // this hook takes a ref to watch and a function to run
  // if the click happened outside
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      // save the value and close the editor
      props.onSetText(inputValueSourceTitle);
      props.onSetText(inputValueQuoteBody);
      props.onSetText(inputValueTags);
      props.onSetText(inputValueQuoteNotes);
      props.onSetText(inputValueQuoteLocation);
      props.onSetText(inputValueSourceInfo);
      setIsInputActive(false);
    }
  });

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and case the editor
      if (enter) {
        props.onSetText(inputValueSourceTitle);
        props.onSetText(inputValueQuoteBody);
        props.onSetText(inputValueTags);
        props.onSetText(inputValueQuoteNotes);
        props.onSetText(inputValueQuoteLocation);
        props.onSetText(inputValueSourceInfo);
        setIsInputActive(false);
      }
      // if Escape is pressed, revert the text and close the editor
      if (esc) {
        setInputValueSourceTitle(props.sourceTitle);
        setInputValueQuoteBody(props.quoteBody);
        setInputValueTags(props.tags);
        setInputValueQuoteNotes(props.quoteNotes);
        setInputValueQuoteLocation(props.quoteLocation);
        setInputValueSourceInfo(props.sourceInfo);
      }
    }
  }, [enter, esc]); // watch the Enter and Escape key presses

  return (
    <React.Fragment>
      <span className="inline-text" ref={wrapperRef}>
        <span
          className={`qc-span inline-text_copy inline-text__copy--${
            !isInputActive ? "active" : "rest"
          }`}
        >
          <p className="bold">Source:</p>
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
        {/* </span> */}

        <span
          className={`qc-span inline-text_copy inline-text__copy--${
            !isInputActive ? "active" : "rest"
          }`}
        >
          <p className="bold">Quote:</p>
          <input
            ref={inputRef}
            // set the width to the input length multiplied by the x height
            // it's not quite right but gets it close
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
            // set the width to the input length multiplied by the x height
            // it's not quite right but gets it close

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
            // set the width to the input length multiplied by the x height
            // it's not quite right but gets it close

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
      </span>
    </React.Fragment>
  );
};

export default QuoteContainerEdit;
