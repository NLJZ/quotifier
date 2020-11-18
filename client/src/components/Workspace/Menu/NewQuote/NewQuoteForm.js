import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { addQuote, showAllSources } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const axios = require("axios");

const NewQuoteForm = (props) => {
  // const [id, setId] = useState("");
  // const [user, setUser] = useState("");
  const [body, setBody] = useState("");
  const [source, setSource] = useState("");
  const [tags, setTags] = useState([]);
  const [userNotes, setUserNotes] = useState("");
  const [location, setLocation] = useState("");
  const [fave, setFave] = useState(false);
  const [redirect, setRedirect] = useState(null);
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
  //---------------------------------------------------
  const id = allSources.map((item) => item._id);
  console.log("id", id);
  //---------------------------------------------------
  const sourceOnly = allSources.map((item) => item.sourceTitle);
  console.log("sourceOnly", sourceOnly);
  //---------------------------------------------------
  let keys = id;
  let values = sourceOnly;
  let sourceKey = {};
  keys.forEach((key, i) => (sourceKey[key] = values[i]));
  console.log("quoteKey", sourceKey);
  //---------------------------------------------------
  const keyValue = () => {
    for (const [key, value] of Object.entries(sourceKey)) {
      return console.log(`${key}:${value}`);
    }
  };
  keyValue();
  //---------------------------------------------------

  const changeSource = (sourceOnly) => {
    setSource(sourceOnly);
  };
  console.log(changeSource);

  const submitForm = async () => {
    await axios(options)
      .then((response) => {
        let quote = response.data.quote;
        dispatch(addQuote(quote));
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error.response);
        alert(`${error.response.data.errors.quote}`);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitForm();
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form className="new-quote-form-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="quoteBody"
        className="input"
        onChange={(e) => setBody(e.target.value)}
        placeholder="enter your quote"
        autoComplete="on"
        required
      />

      <select
        className="input"
        onChange={(e) => changeSource(e.target.value)}
        value={source}
      >
        <option></option>
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
