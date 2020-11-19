import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteContainer from "./QuoteContainer";

const QuoteViewer = () => {
  const headerText = useSelector((state) => state.workspaceHeader);
  const quotes = useSelector((state) => state.filteredQuotes);
  const QuotesToRender = quotes.map((quote) => (
    <QuoteContainer id={quote._id} key={quote._id} />
  ));
  return (
    <div>
      <h1>{headerText}</h1>
      {QuotesToRender}
    </div>
  );
};

export default QuoteViewer;
