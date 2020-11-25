import React, { useState, useRef, useEffect } from "react";

// const [tags, setTags] = useState("");
const [tagsArr, setTagsArr] = useState([]);

const TagsSingle = tagsArr.map((tag, idx) => {
  //   const handleTagDelete = (idx) => {
  //     const temp = [...tagsArr];
  //     temp.splice(idx, 1);
  //     setTagsArr(temp);
  //   };

  return (
    <div key={idx}>
      <span key={idx}>
        {tag}{" "}
        {/* <button
          className="remove-tag-button"
          onClick={() => handleTagDelete(idx)}
        >
          x
        </button> */}
      </span>
    </div>
  );
});

export default TagsSingle;
