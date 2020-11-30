import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneQuote } from "../../../../helpers/getUserData";
import {
  addQuote,
  addSource,
  showAllQuotes,
  showRecentQuotes,
  showFavoriteQuotes,
  loadTags,
  loadFaves,
} from "../../../../redux/actions";

const axios = require("axios");

// const QuoteContainerEdit = ({ quote }) => {

const QuoteContainerEdit = (props) => {
  const setIsEditable = props.setIsEditable;
  const [inputValueSourceTitle, setInputValueSourceTitle] = useState(
    props.source.sourceTitle
  );

  const [inputValueQuoteBody, setInputValueQuoteBody] = useState(
    props.quote.body
  );
  const tags = props.quote.tags;
  const tagsArr = tags.map((item, i) => item);
  const [inputValueTagsArr, setInputValueTagsArr] = useState([...tagsArr]);
  const [inputValueTags, setInputValueTags] = useState("");
  // const [tagsArr2, setTagsArr2] = useState([]);

  const [inputValueQuoteNotes, setInputValueQuoteNotes] = useState(
    props.quote.userNotes
  );
  const [inputValueQuoteLocation, setInputValueQuoteLocation] = useState(
    props.quote.location
  );
  const [inputValueSourceInfo, setInputValueSourceInfo] = useState(
    props.source.sourceInfo
  );

  const [sourceAdded, setSourceAdded] = useState(false);
  const [quoteAdded, setQuoteAdded] = useState(false);
  const [readyToClose, setReadyToClose] = useState(false);
  const quotesState = useSelector((state) => state.quotes);
  const currentView = useSelector((state) => state.currentView);

  useEffect(() => {
    console.log(props.quote._id);
    console.log(props.source._id);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (Boolean(sourceAdded)) {
      submitFormQuote();
      setSourceAdded(false);
      showAll();
      setIsEditable(false);
    } else if (Boolean(quoteAdded)) {
      setQuoteAdded(false);
      showAll();
      setReadyToClose(true);
    } else if (Boolean(readyToClose)) {
    }
  });

  const optionQuote = {
    url: `/api/v1/data/updateQuote/${props.quote._id}`,
    mode: "cors",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      body: inputValueQuoteBody,
      userNotes: inputValueQuoteNotes,
      location: inputValueQuoteLocation,
    },
  };

  const optionSource = {
    url: `/api/v1/data/updateSource/${props.source._id}`,
    mode: "cors",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      sourceTitle: inputValueSourceTitle,
      sourceInfo: inputValueSourceInfo,
    },
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
    let updatedSource;
    await axios(optionSource)
      .then((response) => {
        console.log(response);
        let sourceData = response.data;
        console.log(sourceData);
        dispatch(addSource(sourceData));
        setSourceAdded(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
    return updatedSource;
  };

  const submitFormQuote = async () => {
    await axios(optionQuote)
      .then(async (response) => {
        console.log(response);
        let quoteData = response.data;
        console.log(quoteData);
        const quoteFetch = await getOneQuote(quoteData._id);
        const updatedQuote = quoteFetch[0];
        console.log(updatedQuote);
        dispatch(addQuote(updatedQuote));
        setQuoteAdded(true);
      })
      .catch((error) => {
        console.log("this is an error", error.response);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValueSourceTitle !== "") {
      await submitFormSource();
    } else {
      await submitFormQuote();
    }
  };

  const addTags = (e) => {
    // if (inputValueTags.length !== 0) {
    e.preventDefault();
    setInputValueTags("");
    setInputValueTagsArr([...inputValueTagsArr, inputValueTags]);
    // } else {
    //   e.preventDefault();
    //   setInputValueTags("");
    // }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      console.log("enter");
      addTags(e);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <span>
          <p className="bold bold-source">Source:</p>
          <input
            type="text"
            value={inputValueSourceTitle}
            onChange={(e) => {
              setInputValueSourceTitle(e.target.value);
            }}
            className="qc-span editable-input"
          />
        </span>

        <span>
          <p className="bold bold-quote">Quote:</p>
          <textarea
            type="text"
            value={inputValueQuoteBody}
            onChange={(e) => {
              setInputValueQuoteBody(e.target.value);
            }}
            className="qc-span editable-input editable-input-quote"
          ></textarea>
        </span>

        <span>
          <p className="bold bold-tags">Tags: </p>
          <div className="qce-tags">
            <input
              type="text"
              value={inputValueTags}
              onKeyPress={(e) => handleKeypress(e)}
              onChange={(e) => {
                setInputValueTags(e.target.value);
              }}
              className="qc-span editable-input"
            />

            <div className="qce-tags-line">
              {inputValueTagsArr.map((tag, i) => {
                return (
                  <div key={i}>
                    <span key={i}>{tag}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="qce-tags-button"
            onClick={(e) => addTags(e)}
          ></button>
        </span>

        <span>
          <p className="bold bold-notes">Notes:</p>
          <input
            type="text"
            value={inputValueQuoteNotes}
            onChange={(e) => {
              setInputValueQuoteNotes(e.target.value);
            }}
            className="qc-span editable-input"
          />
        </span>

        <span>
          <p className="bold bold-location">Location:</p>{" "}
          <input
            type="text"
            value={inputValueQuoteLocation}
            onChange={(e) => {
              setInputValueQuoteLocation(e.target.value);
            }}
            className="qc-span editable-input"
          />
        </span>

        <span>
          <p className="bold bold-details">Details:</p>{" "}
          <input
            type="text"
            value={inputValueSourceInfo}
            onChange={(e) => {
              setInputValueSourceInfo(e.target.value);
            }}
            className="qc-span editable-input"
          />
        </span>

        <button
          className=" qce-form-button nq-button-submit"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default QuoteContainerEdit;
