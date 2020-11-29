import React from "react";

const QuoteContainerOpen = (props) => {
  return (
    <React.Fragment>
      <span className="qc-span">
        <p className="bold  bold-source-main">Source:</p>{" "}
        <p>{props.sourceTitle}</p>
      </span>
      <span className="qc-span">
        <p className="bold bold-quote-main">Quote:</p>
        <p>"{props.quoteBody}</p>"
      </span>

      <div className="qc-tags">
        <span className="qc-tags-single">
          {" "}
          <p className="bold  bold-tags-main">Tags: </p>
          {props.tags}
        </span>
      </div>

      <span className="qc-span">
        <p className="bold  bold-notes-main">Notes:</p>{" "}
        <p> {props.quoteNotes}</p>
      </span>
      <span className="qc-span">
        <p className="bold  bold-location-main">Location:</p>{" "}
        <p>{props.quoteLocation}</p>
      </span>

      <span className="qc-span">
        <p className="bold  bold-details-main">Details:</p>{" "}
        <p>{props.sourceInfo}</p>
      </span>
    </React.Fragment>
  );
};

export default QuoteContainerOpen;
