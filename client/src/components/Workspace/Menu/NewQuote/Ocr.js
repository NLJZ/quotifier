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
    // <div className="ocr">
    <>
      {/* <label for="file">Text image: </label> */}
      <div className="col-1-of-2">
        <input
          type="file"
          accept="image/gif, image/jpeg, image/png"
          name="image"
          id="file"
          className="nq-input nq-input-text-image"
          width="0"
          height="0"
          onChange={handleChange}
        />
      </div>
      <div className="col-2-of-2">
        {ocr ? (
          <LoadingAnimation />
        ) : (
          <button className="nq-button" onClick={doOCR}>
            Submit
          </button>
        )}
      </div>

      {/* </div> */}
    </>
  );
};

export default Ocr;
