const axios = require("axios");

export const isbnSearch = async (isbn) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=ISBN:${isbn}`
    );
    console.log(response);
    const data = await response.data.items[0].volumeInfo;
    console.log(data);
    return data;
  } catch (err) {
    const couldNotFind = "Sorry, we could not find a book with that ISBN...";
    return couldNotFind;
  }
};
