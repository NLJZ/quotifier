import React, { useState } from "react";
import { isbnSearch } from "../../../helpers/api";

const IsbnLookup = (props) => {
  const [isbn, setIsbn] = useState("");

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && isbn.trim() !== "") {
      props.setLoading(true);
      let data = await isbnSearch(isbn);
      console.log(data);
      if (data !== "Sorry, we could not find a book with that ISBN...") {
        props.setLoading(false);
        props.setSourceTitle(data.title);
        const authors = data.authors ? data.authors.join(", ") : "";
        const author = `by ${authors}`;
        const title = data.title ? data.title : "";
        const publisher = data.publisher ? `${data.publisher}, ` : "";
        const date = data.publishedDate ? data.publishedDate : "";
        props.setSourceInfo(`${title} ${author}. ${publisher} ${date}.`);
      } else {
        props.setLoading(false);
        props.setSourceTitle(data);
        props.setSourceInfo("");
      }
    }
  };

  return (
    <React.Fragment>
      <input
        className="nq-input"
        onChange={(e) => setIsbn(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="autofill source details with ISBN..."
      ></input>
    </React.Fragment>
  );
};

export default IsbnLookup;
