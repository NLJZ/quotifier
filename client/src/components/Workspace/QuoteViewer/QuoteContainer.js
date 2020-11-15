import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";

const QuoteContainer = (props) => {
  const id = props.id;
  const quote = useSelector((state) => state.quotes[`${id}`]);
  const source = useSelector((state) => state.sources[quote.source]);
  const quoteBody = ReactHtmlParser(quote.body);
  const quoteNotes = quote.userNotes;
  const quoteLocation = quote.location;
  const sourceTitle = source.sourceTitle;
  const sourceInfo = ReactHtmlParser(source.sourceInfo);
  const quoteTags = quote.tags;
  let renderTags;
  if (quoteTags !== undefined) {
    renderTags = quoteTags.map((val, i) => {
      if (val !== undefined) {
        return (
          <li className="comma" key={i}>
            {val}
          </li>
        );
      }
    });
  } else {
    renderTags = null;
  }

  return (
    <div className="quote-container text">
      <span>"{quoteBody}"</span>
      <ul className="quoteTags">
        <li className="bold">Tags: </li>
        {renderTags}
      </ul>
      <span>
        <p className="bold">Notes:</p> <p> {quoteNotes}</p>
      </span>
      <span>
        {" "}
        <p className="bold">Location:</p> <p>{quoteLocation}</p>
      </span>
      <span>
        <p className="bold">Source:</p> <p>{sourceTitle}</p>
      </span>
      <span>
        <p className="bold">Details:</p> <p>{sourceInfo}</p>
      </span>
    </div>
  );
};

export default QuoteContainer;
