import React, { useState } from "react";

const NewQuoteFormTags = (props) => {
  const [tags, setTags] = useState([{ text: "first tag" }]);
  const [tagValue, setTagValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tagValue) return;
    addTag(tagValue);
    setTagValue("");
  };

  const addTag = (text) => {
    const newTags = [...tags, { text }];
    setTags(newTags);
  };

  return (
    <div className="tags-button">
      <input
        onSubmit={handleSubmit}
        type="text"
        className="input"
        value={tagValue}
        onChange={(e) => setTagValue(e.target.tagValue)}
      />

      {tags.map((tag, index) => (
        <div key={index} index={index} className="tags">
          {tag.text}
        </div>
      ))}
    </div>
  );
};

export default NewQuoteFormTags;
