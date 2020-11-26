import React from "react";

const QuoteContainerOpen = (props) => {
  return (
    <React.Fragment>
      <span className="qc-span">
        <p className="bold">Source:</p> <p>{props.sourceTitle}</p>
      </span>
      <span className="qc-span">
        <p className="bold">Quote:</p>
        <p>"{props.quoteBody}</p>"
      </span>

      <div className="qc-tags">
        <span className="qc-tags-single">
          {" "}
          <p className="bold">Tags: </p>
          {props.tags}
        </span>
      </div>

      <span className="qc-span">
        <p className="bold">Notes:</p> <p> {props.quoteNotes}</p>
      </span>
      <span className="qc-span">
        <p className="bold">Location:</p> <p>{props.quoteLocation}</p>
      </span>

      <span className="qc-span">
        <p className="bold">Details:</p> <p>{props.sourceInfo}</p>
      </span>
    </React.Fragment>
  );
};

export default QuoteContainerOpen;
