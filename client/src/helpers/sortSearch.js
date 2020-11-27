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
      if (quote.source === source._id) {
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

// search all quotes and sources by string

export const searchData = (str, quotesState, sourcesState) => {
  let filteredQuotes = [];
  const quotes = Object.values(quotesState);
  const sources = Object.values(sourcesState);
  const stringArray = str
    .split(" ")
    .map((item) => item.trim().toLowerCase())
    .filter((item) => item !== "");
  sources.forEach((source) => {
    let sourceDataArr = [
      ...source.sourceTitle.split(" ").map((item) => item.toLowerCase()),
      ...source.sourceInfo.split(" ").map((item) => item.toLowerCase()),
    ];
    if (sourceDataArr.some((r) => stringArray.includes(r))) {
      filteredQuotes.push(...source.quotes);
    }
  });
  quotes.forEach((quote) => {
    let quoteDataArr = [
      ...quote.body.split(" ").map((item) => item.toLowerCase()),
      ...quote.userNotes.split(" ").map((item) => item.toLowerCase()),
      ...[quote.tags],
    ];
    if (
      quoteDataArr.some((r) => stringArray.includes(r)) &&
      !filteredQuotes.includes(quote._id)
    ) {
      filteredQuotes.push(...[quote._id]);
    }
  });
  const filteredQuoteArray = filteredQuotes.map((item) => quotesState[item]);
  return filteredQuoteArray;
};
