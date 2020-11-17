import React from "react";
import { useSelector } from "react-redux";
import {
  getAllTags,
  findQuotesByTag,
  sortByDate,
} from "../../../helpers/sortSearch.js";

function Help() {
  const quotes = useSelector((state) => state.quotes);
  const tags = getAllTags(quotes);
  const quotesWithTag = findQuotesByTag(
    ["pessimism", "Dogs", "test TEST tesT"],
    quotes
  );
  const sortedQuotesByDate = sortByDate(quotes, "new");
  console.log(tags);
  console.log(quotesWithTag);
  console.log(sortedQuotesByDate);
  return (
    <div className="help">
      <h2>help</h2>
    </div>
  );
}

export default Help;
