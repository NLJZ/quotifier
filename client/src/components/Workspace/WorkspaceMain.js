import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteViewer from "./QuoteViewer/QuoteViewer.js";
import Greeting from "./Greeting";

const WorkspaceMain = () => {
  const quoteViewer = useSelector((state) => state.quoteViewer);
  let MainContent = Greeting;
  if (quoteViewer) {
    MainContent = QuoteViewer;
  }

  return (
    <div className="ws-main">
      <MainContent />
    </div>
  );
};

export default WorkspaceMain;
