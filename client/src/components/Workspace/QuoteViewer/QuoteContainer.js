import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
//-------icons------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
//-------components-----------------
import QuoteContainerOpen from "./QuoteContainer/QuoteContainerOpen";
import QuoteContainerClosed from "./QuoteContainer/QuoteContainerClosed";
import QuoteContainerEdit from "./QuoteContainer/QuoteContainerEdit";

//--------utils---------------------
import cleanHtml from "../../../utils/cleanHtml";

const QuoteContainer = (props) => {
  const [isOff, setIsOff] = useState(true);
  const openContainer = () => setIsOff(!isOff);

  const [isEditable, setIsEditable] = useState(false);
  const openEditable = () => setIsEditable(!isEditable);

  const id = props.id;
  const quote = useSelector((state) => state.quotes[`${id}`]);
  const sources = useSelector((state) => state.sources);
  const quoteBodyClean = cleanHtml(quote.body);
  const quoteBody = ReactHtmlParser(quoteBodyClean);
  const quoteNotes = quote.userNotes;
  const quoteLocation = quote.location;
  const sourceId = quote.source;
  const source = sources[sourceId];
  let sourceTitle = null;
  let sourceInfo = null;
  if (source !== undefined) {
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

  if (isEditable) {
    quoteContainer = (
      <QuoteContainerEdit
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

  let buttonOpen = <FontAwesomeIcon icon={faPlusCircle} />;

  if (!isOff) {
    buttonOpen = <FontAwesomeIcon icon={faMinusCircle} />;
  }

  if (isEditable) {
    buttonOpen = null;
  }

  let buttonEdit = (
    <button className="qc-button-edit" onClick={openEditable}>
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
  if (isEditable) {
    buttonEdit = (
      <button className="qc-button-edit" onClick={openEditable}>
        done
      </button>
    );
  }

  return (
    <div className="qc qc-text">
      <span className="qc-buttons">
        {buttonEdit}

        <button className="qc-button-edit">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </span>
      {quoteContainer}
      <button className="qc-button" onClick={openContainer}>
        {buttonOpen}
      </button>
    </div>
  );
};

export default QuoteContainer;
