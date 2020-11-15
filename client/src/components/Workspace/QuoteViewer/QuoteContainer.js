import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
//-------components-----------------
// import QuoteContainerOpen from "./QuoteContainer/QuoteContainerOpen";
import QuoteContainerClosed from "./QuoteContainer/QuoteContainerClosed";

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
    // <QuoteContainerOpen id={id}
    // quote={quote}
    // source={source}
    // quoteBody={quoteBody}
    // quoteNotes={quoteNotes}
    // quoteLocation={quoteLocation}
    // sourceTitle={sourceTitle}
    // sourceInfo={sourceInfo}
    // tags={renderTags} />

    <QuoteContainerClosed
      id={id}
      quote={quote}
      source={source}
      quoteBody={quoteBody}
      quoteNotes={quoteNotes}
      quoteLocation={quoteLocation}
      sourceTitle={sourceTitle}
      sourceInfo={sourceInfo}
      tags={renderTags}
    />
  );
};

export default QuoteContainer;
