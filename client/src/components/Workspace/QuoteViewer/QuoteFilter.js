import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const QuoteFilter = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags);
  const [tagArray, setTags] = useState([]);

  function pushTags(tag) {
    tagArray.push(tag);
  }

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const newTagArray = [...tagArray, value];
    setTags(newTagArray);
  }
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

  console.log(tagArray);

  return (
    <section className="filter-container">
      filter:
      <div className="tagsFilter">
        <ul className="tags-list">{renderTags}</ul>
      </div>
      <div className="sourcesFilter">Sources</div>
    </section>
  );
};

export default QuoteFilter;
