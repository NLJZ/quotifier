import React, { useState, useEffect, useRef } from "react";
import { createWorker } from "tesseract.js";

const Ocr = (props) => {
  const setBody = props.setBody;
  const [currentFile, setCurrentFile] = useState(null);
  const [ocr, setOcr] = useState("Recognizing...");
  console.log(currentFile);

  const handleChange = (e) => {
    setCurrentFile(e.target.files[0]);
  };

  const worker = createWorker({
    logger: (m) => console.log(m),
  });
  const doOCR = async (e) => {
    e.preventDefault();
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(currentFile);
    setBody(text);
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
      <button onClick={doOCR}>Submit</button>
    </div>
  );
};

export default Ocr;
