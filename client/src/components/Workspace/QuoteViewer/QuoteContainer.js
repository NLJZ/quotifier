import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
//-------icons------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
//-------components-----------------
import QuoteContainerOpen from "./QuoteContainer/QuoteContainerOpen";
import QuoteContainerClosed from "./QuoteContainer/QuoteContainerClosed";

const QuoteContainer = (props) => {
  const [isOff, setIsOff] = useState(true);
  const openContainer = () => setIsOff(!isOff);

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

  let quoteContainer = (
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

  if (!isOff) {
    quoteContainer = (
      <QuoteContainerOpen
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
  }

  let buttonOpen = (
    <button onClick={openContainer}>
      <FontAwesomeIcon
        className="ws-menu-top-icon-single"
        icon={faPlusCircle}
      />
    </button>
  );

  if (!isOff) {
    buttonOpen = (
      <button onClick={openContainer}>
        <FontAwesomeIcon
          className="ws-menu-top-icon-single"
          icon={faMinusCircle}
        />
      </button>
    );
  }

  return (
    <div className="quote-container-closed text">
      {quoteContainer}
      {buttonOpen}
    </div>
  );
};

export default QuoteContainer;
