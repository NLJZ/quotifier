const axios = require("axios");

export const sourceSearch = async (string) => {
  const searchString = encodeURIComponent(string);
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchString}&langRestrict=en`
    );
    const data = await response.data.items;
    const bookResultArray = data.map((book) => book.volumeInfo);
    return bookResultArray;
  } catch (err) {
    const couldNotFind = "Sorry, no matches found...";
    return couldNotFind;
  }
};

export const ocrApi = async (file) => {
  // const ocrOptions = {
  //   url: "https://api.ocr.space/parse/image",
  //   base64image: `${file}`,
  //   ocrengine: 1,
  //   mode: "cors",
  //   method: "POST",
  //   headers: {
  //     apikey: "b8d8f2a21588957",
  //   },
  // };
  var settings = {
    url: "https://api.ocr.space/parse/image",
    method: "POST",
    timeout: 0,
    file: file,
    headers: {},
    mimeType: "multipart/form-data",
  };
  console.log(settings);
  const response = await axios(settings);
  console.log(response);
};
