import React, { useState, useEffect, useRef } from "react";
import { ocrApi } from "../../../../helpers/api";

const Ocr = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  console.log(currentFile);
  const handleChange = (e) => {
    setCurrentFile(e.target.files[0]);
  };

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const results = await ocrApi(currentFile);
  };

  return (
    <div className="ocr">
      <input
        type="file"
        accept="image/gif, image/jpeg, image/png"
        name="image"
        id="file"
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Ocr;
