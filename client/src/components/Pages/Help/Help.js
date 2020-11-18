import React from "react";
import { useSelector } from "react-redux";
import {
  getAllTags,
  findQuotesByTag,
  sortByDate,
  getFaves,
} from "../../../helpers/sortSearch.js";

function Help() {
  const quotes = useSelector((state) => state.quotes);
  const tags = getAllTags(quotes);
  const quotesWithTag = findQuotesByTag(
    ["pessimism", "Dogs", "test TEST tesT"],
    quotes
  );
  const sortedQuotesNewestFirst = sortByDate(quotes, "new");
  const sortedQuotesOldestFirst = sortByDate(quotes, "old");
  const favorites = getFaves(quotes);
  console.log(tags);
  console.log(quotesWithTag);
  console.log(sortedQuotesNewestFirst);
  console.log(sortedQuotesOldestFirst);
  console.log(favorites);
  return (
    <div className="help">
      <h2>help</h2>
    </div>
  );
}

export default Help;
