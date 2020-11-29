import React, { useState } from "react";
import { addQuote, addSource, showAllSources } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const axios = require("axios");

const NewSourceForm = (props) => {
  //----------------button--------------------------------
  //   const [isActive, setIsActive] = useState(true);
  //   const onOpenCloseClick = () => setIsActive(!isActive);
  //------------------source---------------------------------
  const [sourceTitle, setSourceTitle] = useState("");
  const [sourceInfo, setSourceInfo] = useState("");
  const dispatch = useDispatch();

  //   const dropdownRef = useRef(null);
  //   const [isClicked, setIsClicked] = useState(false);
  //   const onClickSource = (e) => {
  //     e.preventDefault();
  //     setIsClicked(!isClicked);
  //   };

  //   useEffect(() => {
  //     if (sourceAdded === true) {
  //       submitFormQuote();
  //       setSourceAdded(false);
  //     }
  //   });

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

  //   const changeSourceId = (source) => {
  //     setSourceId(source);
  //   };

  function closeForm() {
    props.closeForm();
  }

  const submitFormSource = async () => {
    let newSource;
    await axios(optionSource)
      .then((response) => {
        let source = response.data;
        dispatch(addSource(source));
        console.log(`${source._id}`);
        // changeSourceId(`${source._id}`);
        // setSourceAdded(true);
        closeForm();
      })
      .catch((error) => {
        console.log(error.response);
      });
    return newSource;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sourceTitle !== "") {
      await submitFormSource();
    } else {
      //   await submitFormQuote();
    }
  };
  //   const addTags = (e) => {
  //     e.preventDefault();
  //     setTagsArr([...tagsArr, tags]);
  //     setTags("");
  //   };

  return (
    // <div className={`nq-form ${isActive ? "active" : "inactive"}`}>
    <form className="nq-form-form" onSubmit={handleSubmit}>
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
        </div>
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

      <div className="form-row">
        <div className="col-1-of-1-button">
          <button
            // onClick={onOpenCloseClick}
            className="nq-button-submit"
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

export default NewSourceForm;
