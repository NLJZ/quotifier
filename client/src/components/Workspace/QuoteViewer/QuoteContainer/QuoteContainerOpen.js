import React from "react";

const QuoteContainerOpen = (props) => {
  return (
    <div className="quote-container-open text">
      <span>"{props.quoteBody}"</span>
      <ul className="quoteTags">
        <li className="bold">Tags: </li>
        {props.tags}
      </ul>
      <span>
        <p className="bold">Notes:</p> <p> {props.quoteNotes}</p>
      </span>
      <span>
        {" "}
        <p className="bold">Location:</p> <p>{props.quoteLocation}</p>
      </span>
      <span>
        <p className="bold">Source:</p> <p>{props.sourceTitle}</p>
      </span>
      <span>
        <p className="bold">Details:</p> <p>{props.sourceInfo}</p>
      </span>
    </div>
  );
};

export default QuoteContainerOpen;
