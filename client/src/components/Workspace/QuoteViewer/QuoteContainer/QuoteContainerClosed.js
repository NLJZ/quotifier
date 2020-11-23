import React from "react";

const QuoteContainerClosed = (props) => {
  const shortQuoteBody = props.quoteBody;

  const shortQuoteNotes = props.quoteNotes;

  const shortSourceTitle = props.sourceTitle;
  const shortTags = props.tags;

  //   quoteNotesShort.map((item) => console.log(item));

  return (
    <>
      <span className="qc-span">
        <p className="bold">Source:</p> <p> {shortSourceTitle}</p>
      </span>
      <span className="qc-span">
        <p className="bold">Quote:</p>"{shortQuoteBody}"
      </span>

      <div className="qc-tags">
        <span className="qc-tags-single">
          {" "}
          <p className="bold">Tags: </p>
          {shortTags}{" "}
        </span>
      </div>
    </>
  );
};

export default QuoteContainerClosed;
