import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import cleanHtml from "../../../utils/cleanHtml";

const QuoteContainer = (props) => {
  const id = props.id;
  const quote = useSelector((state) => state.quotes[`${id}`]);
  const source = useSelector((state) => state.sources[quote.source]);
  const quoteBodyClean = cleanHtml(quote.body);
  const quoteBody = ReactHtmlParser(quoteBodyClean);
  const quoteNotes = quote.userNotes;
  const quoteLocation = quote.location;
  let sourceTitle = null;
  let sourceInfo = null;
  if (quote.source !== undefined) {
    sourceTitle = source.sourceTitle;
    sourceInfo = ReactHtmlParser(source.sourceInfo);
  }
  const quoteTags = quote.tags;
  let renderTags;
  if (quoteTags !== undefined) {
    renderTags = quoteTags.map((val, i) => {
      return val !== undefined ? (
        <li className="comma" key={i}>
          {val}
        </li>
      ) : null;
    });
  }

  return (
    <div className="quote-container text">
      <span>{quoteBody}</span>
      <ul className="quoteTags">
        <li>Tags: </li>
        {renderTags}
      </ul>
      <span>Notes: {quoteNotes}</span>
      <span>Location: {quoteLocation}</span>
      <span>Source: {sourceTitle}</span>
      <span>Details: {sourceInfo}</span>
    </div>
  );
};

export default QuoteContainer;
