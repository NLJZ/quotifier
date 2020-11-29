import React, { useState, useEffect, useRef } from "react";
import { createWorker } from "tesseract.js";

const Ocr = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [ocr, setOcr] = useState("Recognizing...");
  useEffect(() => {
    doOCR();
  });
  console.log(currentFile);

  const handleChange = (e) => {
    setCurrentFile(e.target.files[0]);
    doOCR();
  };

  const worker = createWorker({
    logger: (m) => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(currentFile);
    setOcr(text);
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
