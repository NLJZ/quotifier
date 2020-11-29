import React, { useState } from "react";
import { isbnSearch } from "../../../helpers/api";
import LoadingAnimation from "../../Animation/LoadingAnimation";

const IsbnLookup = (props) => {
  const [isbn, setIsbn] = useState("");
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
        props.setSourceInfo(`${title} ${author}. ${publisher} ${date}.`);
        props.setSourceTitle(title);
      };
      return (
        <li className="result" key={i} onClick={handleClick}>
          {title}
          {author}
        </li>
      );
    });
    console.log("searchresults", searchResults);
  }
  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && isbn.trim() !== "") {
      setLoading(true);
      const results = await isbnSearch(isbn);
      if (results !== "Sorry, no matches found...") {
        setLoading(false);
        setSearchResults(results);
      } else {
        setLoading(false);
        setSearchResults([{ title: results }]);
      }
      // props.setSourceTitle(data.title);
      // const authors = data.authors ? data.authors.join(", ") : "";
      // const author = `by ${authors}`;
      // const title = data.title ? data.title : "";
      // const publisher = data.publisher ? `${data.publisher}, ` : "";
      // const date = data.publishedDate ? data.publishedDate : "";
      // props.setSourceInfo(`${title} ${author}. ${publisher} ${date}.`);
      // } else {
      //   props.setLoading(false);
      //   props.setSourceTitle(data);
      //   props.setSourceInfo("");
      // }
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <input
          className="nq-input"
          onChange={(e) => setIsbn(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for source..."
        ></input>
      )}

      <div>Search Results: {resultsList} </div>
    </React.Fragment>
  );
};

export default IsbnLookup;
