import React, { useState } from "react";
import { createWorker } from "tesseract.js";
import LoadingAnimation from "../../../Animation/LoadingAnimation";

const Ocr = (props) => {
  const setBody = props.setBody;
  const [currentFile, setCurrentFile] = useState(null);
  const [ocr, setOcr] = useState(false);

  const handleChange = (e) => {
    setCurrentFile(e.target.files[0]);
  };

  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const doOCR = async (e) => {
    setOcr(true);
    e.preventDefault();
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(currentFile);
    setBody(text.replace(/(\r\n|\n|\r)/gm, " "));
    setOcr(false);
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
      {ocr ? <LoadingAnimation /> : null}
      <button onClick={doOCR}>Submit</button>
    </div>
  );
};

export default Ocr;
