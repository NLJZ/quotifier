import React from "react";

const QuoteContainerClosed = (props) => {
  const shortQuoteBody = props.quoteBody;

  const shortQuoteNotes = props.quoteNotes;

  const shortSourceTitle = props.sourceTitle;
  const shortTags = props.tags;

  //   quoteNotesShort.map((item) => console.log(item));

  return (
    <>
      <span>
        <p className="bold">Title:</p> <p> {shortSourceTitle}</p>
      </span>
      <span>"{shortQuoteBody}"</span>
      <ul className="quoteTags">
        <li className="bold">Tags: </li>
        {shortTags}
      </ul>
    </>
  );
};

export default QuoteContainerClosed;
