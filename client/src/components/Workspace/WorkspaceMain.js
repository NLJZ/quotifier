import React from "react";
import { useSelector } from "react-redux";
import QuoteViewer from "./QuoteViewer/QuoteViewer.js";
import Greeting from "./Greeting";

const WorkspaceMain = () => {
  const quoteViewerOn = useSelector((state) => state.quoteViewer);

  return <>{quoteViewerOn ? <QuoteViewer /> : <Greeting />}</>;
};

export default WorkspaceMain;
