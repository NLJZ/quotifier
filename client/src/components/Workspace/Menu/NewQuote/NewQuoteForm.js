import React, { useState, useRef, useEffect } from "react";
import {
  addQuote,
  addSource,
  showAllQuotes,
  showRecentQuotes,
  showFavoriteQuotes,
  loadTags,
  loadFaves,
} from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getOneQuote, getOneSource } from "../../../../helpers/getUserData";
import Ocr from "./Ocr";
//----components-----
// import NewQuoteFormTags from "./NewQuoteForm/NewQuoteFormTags";

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
  const [readyToClose, setReadyToClose] = useState(false);
  const [sourceTitle, setSourceTitle] = useState("");
  const [sourceInfo, setSourceInfo] = useState("");
  const quotesState = useSelector((state) => state.quotes);
  const currentView = useSelector((state) => state.currentView);
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  const [isClicked, setIsClicked] = useState(false);
  function clickFave() {
    setFave(!fave);
  }
  const onClickSource = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (Boolean(sourceAdded)) {
      submitFormQuote();
      setSourceAdded(false);
      showAll();
    } else if (Boolean(quoteAdded)) {
      setQuoteAdded(false);
      showAll();
      setReadyToClose(true);
    } else if (Boolean(readyToClose)) {
      closeForm();
    }
  });

  function closeForm() {
    props.closeForm();
  }

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

  const changeSourceId = (source) => {
    setSourceId(source);
  };

  const showAll = () => {
    if (currentView === "all") {
      dispatch(showAllQuotes(quotesState));
      dispatch(loadTags(Object.values(quotesState)));
    } else if (currentView === "recent") {
      dispatch(showRecentQuotes(quotesState));
      dispatch(loadTags(Object.values(quotesState)));
      dispatch(loadFaves(Object.values(quotesState)));
    } else if (currentView === "favorites") {
      dispatch(showFavoriteQuotes(quotesState));
      dispatch(loadTags(Object.values(quotesState)));
      dispatch(loadFaves(Object.values(quotesState)));
    }
  };

  const submitFormSource = async () => {
    let newSource;
    await axios(optionSource)
      .then((response) => {
        console.log(response);
        let source = response.data;
        dispatch(addSource(source));
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
      .then(async (response) => {
        console.log(response);
        let quote = response.data;
        const quoteFetch = await getOneQuote(quote._id);
        const newQuote = quoteFetch[0];
        dispatch(addQuote(newQuote));
        console.log(newQuote);
        console.log(quote);
        if (newQuote.source !== "" || undefined) {
          const sourceFetch = await getOneSource(quote.source);
          const updatedSource = sourceFetch[0];
          dispatch(addSource(updatedSource));
        }
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
    if (tags.length !== 0) {
      e.preventDefault();
      setTags("");
      setTagsArr([...tagsArr, tags]);
    } else {
      e.preventDefault();
      setTags("");
    }
  };

  const handleTagDelete = (i) => {
    const temp = [...tagsArr];
    temp.splice(i, 1);
    setTagsArr(temp);
  };

  return (
    <form className="nq-form-form" onSubmit={handleSubmit}>
      <div className="form-row-input">
        <div className="col-left">
          <p className="nqf-bold">Source:</p>
        </div>
        <div className="col-1-of-2">
          <select
            className="nq-input"
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
        </div>
        <div className="col-2-of-2">
          {" "}
          <button
            className="nq-button ns-form-trigger nq-form-button"
            onClick={onClickSource}
          >
            add source
          </button>
        </div>
      </div>

      <div
        ref={dropdownRef}
        className={`ns-form ${isClicked ? "active" : "inactive"}`}
      >
        <div className="form-row-input">
          <div className="col-left">
            <p className="nqf-bold">Source Title:</p>
          </div>
          <div className="col-1-of-2">
            <input
              type="textarea"
              name="sourceTitle"
              value={sourceTitle}
              className="nq-input"
              onChange={(e) => setSourceTitle(e.target.value)}
              placeholder="enter source Title"
              autoComplete="on"
            />
          </div>{" "}
          <div className="col-2-of-2"></div>
        </div>

        <div className="form-row-input">
          <div className="col-left">
            <p className="nqf-bold">Source Info:</p>
          </div>
          <div className="col-1-of-2">
            <input
              type="textarea"
              name="sourceInfo"
              value={sourceInfo}
              className="nq-input"
              onChange={(e) => setSourceInfo(e.target.value)}
              placeholder="enter source info"
              autoComplete="on"
            />{" "}
          </div>{" "}
          <div className="col-2-of-2"></div>
        </div>
      </div>

      <div className="form-row-input">
        <div className="col-left">
          <p className="nqf-bold">Text image:</p>
        </div>
        <Ocr setBody={setBody} />
      </div>

      <div className="form-row-input">
        <div className="col-left">
          <p className="nqf-bold">Quote:</p>
        </div>
        <div className="col-1-of-2">
          <textarea
            type="textarea"
            name="quoteBody"
            className="nq-input-body"
            onChange={(e) => setBody(e.target.value)}
            placeholder="enter your quote"
            autoComplete="on"
            value={body}
            required
          />{" "}
        </div>
        <div className="col-2-of-2"></div>
      </div>

      <div className="form-row-input">
        <div className="col-left">
          <p className="nqf-bold">Tags:</p>
        </div>
        <div className="col-1-of-2">
          {/* <div className="tags-button"> */}
          <input
            type="text"
            name="tags"
            className="nq-input"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </div>
        <div className="col-2-of-2">
          {" "}
          <button
            className="nq-button nq-form-button"
            onClick={(e) => addTags(e)}
          >
            add tag
          </button>
        </div>
      </div>
      <div className="form-row-input">
        <div className="col-left"></div>
        <div className="col-1-of-2 col-tags">
          <div>
            {tagsArr.map((tag, i) => {
              return (
                <div key={i}>
                  <span key={i}>
                    {tag}
                    <button
                      className="remove-tag-button"
                      onClick={() => handleTagDelete(i)}
                    >
                      x
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-2-of-2"></div>
      </div>

      <div className="form-row-input">
        <div className="col-left">
          <p className="nqf-bold">Notes:</p>
        </div>
        <div className="col-1-of-2">
          <input
            type="text"
            name="userNotes"
            value={userNotes}
            className="nq-input"
            onChange={(e) => setUserNotes(e.target.value)}
            placeholder="userNotes"
            autoComplete="on"
          />
        </div>
        <div className="col-2-of-2"></div>
      </div>

      <div className="form-row-input">
        <div className="col-left">
          <p className="nqf-bold">Page:</p>
        </div>
        <div className="col-1-of-2">
          <input
            type="text"
            name="location"
            value={location}
            className="nq-input"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="location"
            autoComplete="on"
          />
        </div>
        <div className="col-2-of-2"></div>
      </div>

      <div className="form-row-input">
        <div className="col-left">
          <p className="nqf-bold">Favorite:</p>
        </div>
        <div className="col-fav">
          <input
            type="checkbox"
            name="fave"
            className="nq-input-fav"
            onChange={clickFave}
            placeholder="fave"
            autoComplete="on"
          />
        </div>
        <div className="col-2-of-2"></div>
      </div>

      <div className="form-row">
        <div className="col-1-of-1-button">
          {" "}
          <button
            className="nq-button-submit nq-form-button"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewQuoteForm;
