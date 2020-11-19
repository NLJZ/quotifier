import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterQuotesByTag } from "../../../redux/actions/";

const QuoteFilter = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags);
  const [show, setShow] = useState(false);
  const [tagArray, setTags] = useState([]);

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    let newTagArray = [...tagArray];
    if (newTagArray.includes(value) === false && target.checked === true) {
      newTagArray = [...tagArray, value];
      setTags(newTagArray);
    } else {
      const tagArray = newTagArray.filter(function (item) {
        return item !== value;
      });
      setTags(tagArray);
    }
  }

  const showIt = () => {
    setShow(!show);
  };

  const runTagFilter = () => {
    console.log(tagArray);
    dispatch(filterQuotesByTag(tagArray));
  };

  const renderTags = tags.map((tag, i) => (
    <li key={i}>
      <input
        type="checkbox"
        name="tag"
        value={tag}
        onChange={handleInputChange}
      />{" "}
      {tag}
    </li>
  ));

  return (
    <section className="filter-container">
      filter:
      <div className="tagsDropdown">
        <button onClick={showIt}>Tags</button>
        <div className={`tagsFilter ${show ? "show" : "hide"}`}>
          <ul className="tags-list">{renderTags}</ul>
          <button onClick={runTagFilter}>Run Filter</button>
        </div>
      </div>
      <div className="sourcesFilter"></div>
    </section>
  );
};

export default QuoteFilter;
