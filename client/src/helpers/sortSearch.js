// pass the state of quotes (from redux) into this function to return all tags in quotes
export const getAllTags = (quotesArr) => {
  const tagArray = [];
  quotesArr.forEach((quote) => {
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

// pass an array of tags and an array of quotes to find all quotes including any one of the tags
export const findQuotesByTag = (array, quotes) => {
  const quoteArray = [];
  const quoteStateArray = quotes;
  const tagArray = array.map((tag) => tag.toLowerCase());
  tagArray.forEach((tag) => {
    quoteStateArray.forEach((quote) => {
      if (quote.tags !== undefined) {
        const tagsToLower = quote.tags.map((value) => value.toLowerCase());
        if (tagsToLower.includes(tag) && quoteArray.includes(quote) !== true) {
          quoteArray.push(quote);
        }
      }
    });
  });
  return quoteArray;
};

export const findQuotesBySource = (array, quotes) => {
  const quoteArray = [];
  const quoteStateArray = quotes;
  const sourceArray = array;
  sourceArray.forEach((source) => {
    quoteStateArray.forEach((quote) => {
      if (quote.source === source) {
        quoteArray.push(quote);
      }
    });
  });
  return quoteArray;
};

// pass state object to sort new to old, pass "old" as str if you want oldest to newest
export const sortByDate = (stateObj, str) => {
  const old = str === "old";
  const stateArray = Object.values(stateObj);
  const sorted = stateArray.sort((a, b) => {
    let dateA = new Date(a.createdAt);
    let dateB = new Date(b.createdAt);
    return old ? dateA - dateB : dateB - dateA;
  });
  return sorted;
};

// get all favorites
export const getFaves = (quotesArr) => {
  const quoteArray = [];
  quotesArr.forEach((quote) => {
    if (quote.fave === true) {
      quoteArray.push(quote);
    }
  });
  return quoteArray;
};
