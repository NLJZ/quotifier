import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { addQuote, showAllSources } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const axios = require("axios");

const NewQuoteForm = (props) => {
  // const [id, setId] = useState("");
  // const [user, setUser] = useState("");
  const [body, setBody] = useState("");
  const [source, setSource] = useState("hello");
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
      body: string,
      source: ,
      tags: array,
      userNotes: string,
      location: string,
      fave: true,
    },
  };

  const sources = useSelector((state) => state.sources);
  console.log(sources);
  const allSources = Object.values(sources);
  console.log(allSources);
  const allSourcesOnly = Object.values(
    allSources.map((item) => item.sourceTitle)
  );
  console.log(allSourcesOnly);

  const obj = Object.keys(allSourcesOnly).map((key) => [allSourcesOnly[key]]);
  console.log(obj);
  console.log(obj.map((key) => obj[key]));

  const changeSource = (allSourcesOnly) => {
    setSource(allSourcesOnly.map((item) => item));
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
        alert(
          `${error.response.data.errors.email} ${error.response.data.errors.password}`
        );
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
        type="quoteBody"
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
        required
      >
        {allSourcesOnly.map((item) => (
          <option>{item}</option>
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
