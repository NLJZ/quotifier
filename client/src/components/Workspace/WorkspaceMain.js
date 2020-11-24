import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteViewer from "./QuoteViewer/QuoteViewer.js";
import Greeting from "./Greeting";

const WorkspaceMain = () => {
  const quoteViewerOn = useSelector((state) => state.quoteViewer);

  return (
    // <div className="ws-main">
    <>{quoteViewerOn ? <QuoteViewer /> : <Greeting />}</>
    // </div>
  );
};

export default WorkspaceMain;
