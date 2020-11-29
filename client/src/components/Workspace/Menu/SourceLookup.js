import React, { useState } from "react";
import { sourceSearch } from "../../../helpers/api";
import LoadingAnimation from "../../Animation/LoadingAnimation";

const SourceLookup = (props) => {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  let resultsList;
  if (searchResults !== null) {
    resultsList = searchResults.map((result, i) => {
      let title = result.title !== undefined ? `${result.title} ` : "";
      const author =
        result.authors !== undefined ? `by ${result.authors.join(", ")}` : "";
      const publisher = result.publisher ? `${result.publisher}, ` : "";
      const date = result.publishedDate ? result.publishedDate : "";
      const handleClick = () => {
        props.setSourceInfo(`${title}${author}. ${publisher} ${date}.`);
        props.setSourceTitle(title);
      };
      return (
        <li className="result" key={i} onClick={handleClick}>
          {title}
          {author}
        </li>
      );
    });
  }
  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && userInput.trim() !== "") {
      setLoading(true);
      const results = await sourceSearch(userInput);
      if (results !== "Sorry, no matches found...") {
        setLoading(false);
        setSearchResults(results);
      } else {
        setLoading(false);
        setSearchResults([{ title: results }]);
      }
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <input
          className="nq-input"
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for source..."
        ></input>
      )}
      {searchResults !== null ? (
        <div className="resultsBox">
          Search Results (click result to load): <ol>{resultsList}</ol>{" "}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default SourceLookup;
