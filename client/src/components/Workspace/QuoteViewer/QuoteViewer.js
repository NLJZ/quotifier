import React from "react";
import { useSelector } from "react-redux";
import QuoteContainer from "./QuoteContainer";
import QuoteSorter from "./QuoteSorter";
import QuoteFilterTags from "./QuoteFilterTags";

const QuoteViewer = () => {
  const headerText = useSelector((state) => state.workspaceHeader);
  const quotes = useSelector((state) => state.filteredQuotes);
  const currentView = useSelector((state) => state.currentView);
  const QuotesToRender = quotes.map((quote) => (
    <QuoteContainer id={quote._id} key={quote._id} />
  ));

  return (
    <div>
      <h1>{headerText}</h1>
      <div className="sort-filter">
        <QuoteFilterTags currentView={currentView} />
        <QuoteSorter />
      </div>
      {QuotesToRender}
    </div>
  );
};

export default QuoteViewer;
