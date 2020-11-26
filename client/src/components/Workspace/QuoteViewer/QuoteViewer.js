import React from "react";
import { useSelector } from "react-redux";
import QuoteContainer from "./QuoteContainer";
import QuoteSorter from "./QuoteSorter";
import QuoteFilters from "./QuoteFilters";
import CurrentFilters from "./CurrentFilters";

const QuoteViewer = () => {
  const headerText = useSelector((state) => state.workspaceHeader);
  const quotes = useSelector((state) => state.filteredQuotes);
  const currentView = useSelector((state) => state.currentView);
  const QuotesToRender = quotes.map((quote) => (
    <QuoteContainer id={quote._id} key={quote._id} />
  ));

  return (
    <div className="qv">
      <h1>{headerText}</h1>
      <div className="sort-filter">
        <QuoteFilters currentView={currentView} />
        <QuoteSorter />
      </div>
      <CurrentFilters />
      <div className="qv-quotes-to-render">{QuotesToRender}</div>
    </div>
  );
};

export default QuoteViewer;
