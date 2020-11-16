import React from "react";
import { useSelector } from "react-redux";
import { getAllTags } from "../../../helpers/sortSearch.js";

function Help() {
  const quotes = useSelector((state) => state.quotes);
  getAllTags(quotes);
  return (
    <div className="help">
      <h2>help</h2>
    </div>
  );
}

export default Help;
