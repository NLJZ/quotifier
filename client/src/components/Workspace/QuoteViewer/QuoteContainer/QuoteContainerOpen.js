import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const QuoteContainerOpen = (props) => {
  return (
    <React.Fragment>
      <span className="qc-span">
        <p className="bold">Source:</p> <p>{props.sourceTitle}</p>
      </span>
      <span className="qc-span">
        {" "}
        <p className="bold">Quote:</p>"{props.quoteBody}"
      </span>

      <ul className="qc-tags">
        <p className="bold">Tags: </p>
        <li className="qc-tags-single">{props.tags} </li>
      </ul>

      <span className="qc-span">
        <p className="bold">Notes:</p> <p> {props.quoteNotes}</p>
      </span>
      <span className="qc-span">
        {" "}
        <p className="bold">Location:</p> <p>{props.quoteLocation}</p>
      </span>

      <span className="qc-span">
        <p className="bold">Details:</p> <p>{props.sourceInfo}</p>
      </span>
    </React.Fragment>
  );
};

export default QuoteContainerOpen;
