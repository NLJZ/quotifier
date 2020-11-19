import React, { useState, useRef, useEffect } from "react";
import { addQuote, addSource, showAllSources } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const axios = require("axios");

const NewQuoteForm = (props) => {
  //---------------------------------------------------
  const sources = useSelector((state) => state.sources);
  //---------------------------------------------------
  const allSources = Object.values(sources);

  const [body, setBody] = useState("");
  const [sourceId, setSourceId] = useState(undefined);
  const [tags, setTags] = useState("");
  const [tagsArr, setTagsArr] = useState([]);
  const [userNotes, setUserNotes] = useState("");
  const [location, setLocation] = useState("");
  const [fave, setFave] = useState(false);
  const [sourceAdded, setSourceAdded] = useState(false);
  const [quoteAdded, setQuoteAdded] = useState(false);
  const [sourceTitle, setSourceTitle] = useState("");
  const [sourceInfo, setSourceInfo] = useState("");
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const onClickSource = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (sourceAdded === true) {
      submitFormQuote();
      setSourceAdded(false);
    }
  });

  const optionQuote = {
    url: "/api/v1/data/addQuote",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      body: body,
      source: sourceId,
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

  const changeSourceId = (source) => {
    setSourceId(source);
  };

  const submitFormSource = async () => {
    let newSource;
    await axios(optionSource)
      .then((response) => {
        let source = response.data;
        dispatch(addSource(source));
        console.log(`${source._id}`);
        changeSourceId(`${source._id}`);
        setSourceAdded(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
    return newSource;
  };

  const submitFormQuote = async () => {
    await axios(optionQuote)
      .then((response) => {
        let quote = response.data;
        dispatch(addQuote(quote));
        console.log(quote);
        setQuoteAdded(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sourceTitle !== "") {
      await submitFormSource();
    } else {
      await submitFormQuote();
    }
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
        value={body}
        required
      />
      <label>choose an existing source</label>

      <div>
        {" "}
        <select
          className="input"
          onChange={(e) => changeSourceId(e.target.value)}
          value={sourceId}
        >
          <option value={null}>add an existing source</option>

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
          value={sourceTitle}
          className="input"
          onChange={(e) => setSourceTitle(e.target.value)}
          placeholder="enter source Title"
          autoComplete="on"
        />

        <label>enter the author here:</label>
        <input
          type="textarea"
          name="sourceInfo"
          value={sourceInfo}
          className="input"
          onChange={(e) => setSourceInfo(e.target.value)}
          placeholder="enter source info"
          autoComplete="on"
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
        </ul>
      </div>

      <label>choose an existing source</label>

      <input
        type="text"
        name="userNotes"
        value={userNotes}
        className="input"
        onChange={(e) => setUserNotes(e.target.value)}
        placeholder="userNotes"
        autoComplete="on"
      />
      <label>choose an existing source</label>

      <input
        type="text"
        name="location"
        value={location}
        className="input"
        onChange={(e) => setLocation(e.target.value)}
        placeholder="location"
        autoComplete="on"
      />
      <label>choose an existing source</label>

      <input
        type="checkbox"
        name="fave"
        value={fave}
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
