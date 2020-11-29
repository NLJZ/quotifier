const axios = require("axios");

export const isbnSearch = async (string) => {
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
