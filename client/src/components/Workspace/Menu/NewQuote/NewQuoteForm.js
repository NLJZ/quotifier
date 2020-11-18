import React, { useState } from "react";
import { addQuote, showAllSources } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const axios = require("axios");

const NewQuoteForm = (props) => {
  const [body, setBody] = useState("");
  const [source, setSource] = useState("");
  const [tags, setTags] = useState([]);
  const [userNotes, setUserNotes] = useState("");
  const [location, setLocation] = useState("");
  const [fave, setFave] = useState(false);
  const dispatch = useDispatch();

  const options = {
    url: "/api/v1/data/addQuote",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      body: body,
      source: source,
      tags: tags,
      userNotes: userNotes,
      location: location,
      fave: fave,
    },
  };
  //---------------------------------------------------
  const sources = useSelector((state) => state.sources);
  console.log("sources", sources);
  //---------------------------------------------------
  const allSources = Object.values(sources);
  console.log("allSources", allSources);

  const changeSource = (source) => {
    setSource(source);
  };
  console.log(changeSource);

  const submitForm = async () => {
    await axios(options)
      .then((response) => {
        let quote = response.data.quote;
        dispatch(addQuote(quote));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form className="new-quote-form-form" onSubmit={handleSubmit}>
      <input
        type="textarea"
        name="quoteBody"
        className="input"
        onChange={(e) => setBody(e.target.value)}
        placeholder="enter your quote"
        autoComplete="on"
        required
      />
      <label for="source-selector">choose an existing source</label>
      <select
        className="input"
        onChange={(e) => changeSource(e.target.value)}
        value={source}
      >
        {allSources.map((item) => (
          <option key={item._id} value={item._id}>
            {item.sourceTitle}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="tags"
        className="input"
        onChange={(e) => setTags(e.target.value)}
        placeholder="enter your tags"
        autoComplete="on"
      />

      <input
        type="text"
        name="userNotes"
        className="input"
        onChange={(e) => setUserNotes(e.target.value)}
        placeholder="userNotes"
        autoComplete="on"
      />

      <input
        type="text"
        name="location"
        className="input"
        onChange={(e) => setLocation(e.target.value)}
        placeholder="location"
        autoComplete="on"
      />

      <input
        type=""
        name="fave"
        className="input"
        onChange={(e) => setFave(e.target.value)}
        placeholder="fave"
        autoComplete="on"
      />
      <button className="sign-in-button" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default NewQuoteForm;
