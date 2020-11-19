import React, { useState, useRef } from "react";
import { addQuote, addSource, showAllSources } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const axios = require("axios");

const NewQuoteForm = (props) => {
  //---------------------------------------------------
  const sources = useSelector((state) => state.sources);
  //---------------------------------------------------
  const allSources = Object.values(sources);

  const [body, setBody] = useState("");
  const [source, setSource] = useState(allSources[0]._id);
  const [tags, setTags] = useState("");
  const [tagsArr, setTagsArr] = useState([]);
  const [userNotes, setUserNotes] = useState("");
  const [location, setLocation] = useState("");
  const [fave, setFave] = useState(false);
  const [sourceTitle, setSourceTitle] = useState("");
  const [sourceInfo, setSourceInfo] = useState("");
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const onClickSource = () => setIsClicked(!isClicked);

  const optionQuote = {
    url: "/api/v1/data/addQuote",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      body: body,
      source: source,
      sourceTitle: sourceTitle,
      sourceInfo: sourceInfo,
      tags: tagsArr,
      userNotes: userNotes,
      location: location,
      fave: fave,
    },
  };

  const optionSource = {
    url: "/api/v1/data/addSource",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      sourceTitle: sourceTitle,
      sourceInfo: sourceInfo,
    },
  };
  let returnedSource;

  const changeSource = (source) => {
    setSource(source);
  };
  // console.log(changeSource);

  const submitFormSource = async () => {
    await axios(optionSource)
      .then((response) => {
        let source = response.data;
        dispatch(addSource(source));
        console.log(source._id);
        returnedSource = `${source._id}`;
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const submitFormQuote = async () => {
    await axios(optionQuote)
      .then((response) => {
        let quote = response.data;
        dispatch(addQuote(quote));
        console.log(quote);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFormSource();

    if (returnedSource !== undefined) {
      changeSource(returnedSource);
    }
    submitFormQuote();
  };
  const addTags = (e) => {
    e.preventDefault();
    setTagsArr([...tagsArr, tags]);
    setTags("");
  };

  return (
    <form className="new-quote-form-form" onSubmit={handleSubmit}>
      <label>enter your quote here:</label>
      <input
        type="textarea"
        name="quoteBody"
        className="input"
        onChange={(e) => setBody(e.target.value)}
        placeholder="enter your quote"
        autoComplete="on"
        required
      />
      <label>choose an existing source</label>

      <div>
        {" "}
        <select
          className="input"
          onChange={(e) => changeSource(e.target.value)}
          value={sources._id}
        >
          {/* <option value={null}></option> */}

          {allSources.map((item) => (
            <option key={item._id} value={item._id}>
              {item.sourceTitle}
            </option>
          ))}
        </select>
        <button className="ns-form-trigger" onClick={onClickSource}>
          add source
        </button>
      </div>

      <div
        ref={dropdownRef}
        className={`ns-form ${isClicked ? "active" : "inactive"}`}
      >
        <label>enter a title here:</label>
        <input
          type="textarea"
          name="sourceTitle"
          className="input"
          onChange={(e) => setSourceTitle(e.target.value)}
          placeholder="enter source Title"
          autoComplete="on"
          required
        />

        <label>enter the author here:</label>
        <input
          type="textarea"
          name="sourceInfo"
          className="input"
          onChange={(e) => setSourceInfo(e.target.value)}
          placeholder="enter source info"
          autoComplete="on"
          required
        />
      </div>

      <label>select your tags:</label>
      <div className="tags-button">
        <input
          type="text"
          name="tags"
          className="input"
          value={tags}
          onChange={(e) => {
            setTags(e.target.value);
          }}
        />

        <button onClick={(e) => addTags(e)}>click</button>
        <ul>
          {tagsArr.map((tag, i) => {
            return <li key={i}>{tag}</li>;
          })}

          <li>first tag</li>
        </ul>
      </div>

      <label>choose an existing source</label>

      <input
        type="text"
        name="userNotes"
        className="input"
        onChange={(e) => setUserNotes(e.target.value)}
        placeholder="userNotes"
        autoComplete="on"
      />
      <label>choose an existing source</label>

      <input
        type="text"
        name="location"
        className="input"
        onChange={(e) => setLocation(e.target.value)}
        placeholder="location"
        autoComplete="on"
      />
      <label>choose an existing source</label>

      <input
        type="checkbox"
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
