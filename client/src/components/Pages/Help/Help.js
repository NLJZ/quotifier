import React from "react";
import { useSelector } from "react-redux";
import { getAllTags, findQuotesByTag } from "../../../helpers/sortSearch.js";

function Help() {
  const quotes = useSelector((state) => state.quotes);
  const tags = getAllTags(quotes);
  const quotesWithTag = findQuotesByTag(
    ["pessimism", "Dogs", "test test test"],
    quotes
  );
  console.log(tags);
  console.log(quotesWithTag);
  return (
    <div className="help">
      <h2>help</h2>
    </div>
  );
}

export default Help;
