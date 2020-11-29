import React, { useState, useEffect, useRef } from "react";

const Ocr = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  console.log(currentFile);
  const handleChange = (e) => {
    setCurrentFile(e.target.files[0]);
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
    </div>
  );
};

export default Ocr;
