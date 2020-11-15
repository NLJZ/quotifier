import React from "react";

const QuoteContainerClosed = (props) => {
  const shortQuoteBody = props.quoteBody;
  console.log(shortQuoteBody);

  const shortQuoteNotes = props.quoteNotes;
  console.log(shortQuoteNotes);
  const shortSourceTitle = props.sourceTitle;
  const shortTags = props.tags;

  //   quoteNotesShort.map((item) => console.log(item));

  return (
    <div className="quote-container-closed text">
      <span>
        <p className="bold">Title:</p> <p> {shortSourceTitle}</p>
      </span>
      <span>"{shortQuoteBody}"</span>
      <ul className="quoteTags">
        <li className="bold">Tags: </li>
        {shortTags}
      </ul>
    </div>
  );
};

export default QuoteContainerClosed;
