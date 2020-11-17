// pass the state of quotes (from redux) into this function to return all tags in quotes
export const getAllTags = (quotesState) => {
  const tagArray = [];
  Object.values(quotesState).forEach((quote) => {
    if (quote.tags !== undefined) {
      quote.tags.forEach((tag) => {
        if (tagArray.includes(tag) !== true) {
          tagArray.push(tag);
        }
      });
    }
  });
  return tagArray;
};

// pass an array of quotes and the state of quotes (from redux) to find all quotes with any of the tags
export const findQuotesByTag = (array, quotesState) => {
  const quoteArray = [];
  const quoteStateArray = Object.values(quotesState);
  const tagArray = array;
  tagArray.forEach((tag) => {
    quoteStateArray.forEach((quote) => {
      if (quote.tags !== undefined && quote.tags.includes(tag)) {
        quoteArray.push(quote);
      }
    });
  });
  return quoteArray;
};
