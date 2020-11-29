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

const QuoteContainerEdit = (props) => {
  const sourceTitle = props.sourceTitle;
  console.log(typeof sourceTitle);
  console.log(sourceTitle);
  const quoteBody = Object.values(props.quoteBody).join();
  console.log(typeof quoteBody); // object
  console.log(quoteBody); // object
  const tags = Object.values(props.tags);
  console.log(typeof tags); // object
  console.log(Object.values(tags)); // object
  const quoteNotes = props.quoteNotes;
  console.log(typeof quoteNotes);
  console.log(quoteNotes);
  const quoteLocation = props.quoteLocation;
  console.log(typeof quoteLocation);
  console.log(quoteLocation);
  const sourceInfo = Object.values(props.sourceInfo).join();
  console.log(typeof sourceInfo); // object
  console.log(sourceInfo); // object

  // const [inputValueSourceTitle, setInputValueSourceTitle] = useState(
  //   props.sourceTitle
  // );

  const [inputValueSourceTitle, setInputValueSourceTitle] = useState({
    sourceTitle,
  });

  // const [inputValueQuoteBody, setInputValueQuoteBody] = useState(
  //   props.quoteBody
  // );
  // const [inputValueTags, setInputValueTags] = useState(props.tags);
  // const [inputValueQuoteNotes, setInputValueQuoteNotes] = useState(
  //   props.quoteNotes
  // );
  // const [inputValueQuoteLocation, setInputValueQuoteLocation] = useState(
  //   props.quoteLocation
  // );
  // const [inputValueSourceInfo, setInputValueSourceInfo] = useState(
  //   props.sourceInfo
  // );
  const [sourceAdded, setSourceAdded] = useState(false);
  const [quoteAdded, setQuoteAdded] = useState(false);
  const [readyToClose, setReadyToClose] = useState(false);
  const quotesState = useSelector((state) => state.quotes);
  console.log(quotesState);
  const quote2 = Object.values(quotesState);
  console.log(quote2);
  const quoteMainBody = quote2.map((item) => item.body);
  console.log(quoteMainBody);

  const currentView = useSelector((state) => state.currentView);

  console.log("inputvaluesourcetitle", inputValueSourceTitle);
  // console.log("inputvaluequotelocation", inputValueQuoteLocation);
  // console.log("inputvaluequotenotes", inputValueQuoteNotes);
  // console.log("inputvaluequotebody", inputValueQuoteBody);
  // console.log("inputvaluetags", inputValueTags);
  // console.log("inputvaluesouŕceinfo", inputValueSourceInfo);

  const dispatch = useDispatch();

  function closeForm() {
    props.closeForm();
  }

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

  const optionQuote = {
    url: `/api/v1/data/updateQuote/:${props.id}`,
    mode: "cors",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      // body: inputValueQuoteBody,
      // tags: inputValueTags,
      // userNotes: inputValueQuoteNotes,
      // location: inputValueQuoteLocation,
    },
  };

  const optionSource = {
    url: `/api/v1/data/updateSource/:${props.source}`,
    mode: "cors",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      sourceTitle: inputValueSourceTitle,

      // sourceTitle: inputValueSourceTitle,
      // sourceInfo: inputValueSourceInfo,
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
    let newSource;
    await axios(optionSource)
      .then((response) => {
        console.log(response);
        let source = response.data;
        console.log(source);
        dispatch(addSource(source));
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
        console.log(quote);
        const quoteFetch = await getOneQuote(quote._id);
        const newQuote = quoteFetch[0];
        console.log(newQuote);
        dispatch(addQuote(newQuote));
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

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <span
        //   className={`qc-span inline-text_copy inline-text__copy--${
        //     !isInputActive ? "active" : "rest"
        //   }`}
        >
          <p className="bold">Source:</p>
          <input
            // ref={inputRef}
            type="text"
            // value={inputValueSourceTitle}
            value={inputValueSourceTitle}
            onChange={(e) => {
              setInputValueSourceTitle(e.target.value);
            }}
            className="qc-span editable-input"
            // className={`qc-span editable-input inline-text_input inline-text_input--${
            //   isInputActive ? "active" : "hidden"
            // }`}
          />
        </span>

        {/* <span
        //   className={`qc-span inline-text_copy inline-text__copy--${
        //     !isInputActive ? "active" : "rest"
        //   }`}
        >
          <p className="bold bold-quote">Quote:</p>
          <textarea
            // ref={inputRef}
            type="text"
            value={inputValueQuoteBody}
            onChange={(e) => {
              setInputValueQuoteBody(e.target.value);
            }}
            className="qc-span editable-input editable-input-quote"

            // className={`qc-span editable-input editable-input-quote inline-text_input inline-text_input--${
            //   isInputActive ? "active" : "hidden"
            // }`}
          ></textarea>
        </span> */}

        {/* <div className="qc-tags">
          <span
          // className={`qc-span inline-text_copy inline-text__copy--${
          //   !isInputActive ? "active" : "rest"
          // }`}
          >
            <p className="bold">Tags: </p>
            <div className="qc-tags-single ">{props.tags}</div>
          </span>
        </div> */}

        {/* <span
        //   className={`qc-span inline-text_copy inline-text__copy--${
        //     !isInputActive ? "active" : "rest"
        //   }`}
        >
          <p className="bold">Notes:</p>{" "}
          <input
            // ref={inputRef}
            type="text"
            value={inputValueQuoteNotes}
            onChange={(e) => {
              setInputValueQuoteNotes(e.target.value);
            }}
            className="qc-span editable-input"
            // className={`qc-span editable-input inline-text_input inline-text_input--${
            //   isInputActive ? "active" : "hidden"
            // }`}
          />
        </span> */}

        {/* <span
        //   className={`qc-span inline-text_copy inline-text__copy--${
        //     !isInputActive ? "active" : "rest"
        //   }`}
        >
          <p className="bold">Location:</p>{" "}
          <input
            // ref={inputRef}
            type="text"
            value={inputValueQuoteLocation}
            onChange={(e) => {
              setInputValueQuoteLocation(e.target.value);
            }}
            className="qc-span editable-input"
            // className={`qc-span editable-input inline-text_input inline-text_input--${
            //   isInputActive ? "active" : "hidden"
            // }`}
          />
        </span> */}

        {/* <span
        //   className={`qc-span inline-text_copy inline-text__copy--${
        //     !isInputActive ? "active" : "rest"
        //   }`}
        >
          <p className="bold">Details:</p>{" "}
          <input
            // ref={inputRef}
            type="text"
            value={inputValueSourceInfo}
            onChange={(e) => {
              setInputValueSourceInfo(e.target.value);
            }}
            className="qc-span editable-input"

            // className={`qc-span editable-input inline-text_input inline-text_input--${
            //   isInputActive ? "active" : "hidden"
            // }`}
          />
        </span> */}

        <button
          //   className="nq-button-submit qce-form-button"
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
