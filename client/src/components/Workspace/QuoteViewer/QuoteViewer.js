import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteContainer from "./QuoteContainer";
import QuoteSorter from "./QuoteSorter";

const QuoteViewer = () => {
  const headerText = useSelector((state) => state.workspaceHeader);
  const quotes = useSelector((state) => state.filteredQuotes);
  const QuotesToRender = quotes.map((quote) => (
    <QuoteContainer id={quote._id} key={quote._id} />
  ));
  return (
    <div className="qv">
      <h1>{headerText}</h1>
      <QuoteSorter />
      <div className="qv-quotes-to-render">{QuotesToRender}</div>
    </div>
  );
};

export default QuoteViewer;
