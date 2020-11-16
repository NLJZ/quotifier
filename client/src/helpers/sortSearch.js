export const getAllTags = (quotes) => {
  const quoteArray = Object.values(quotes);
  const tagArray = [];
  quoteArray.forEach((quote) => {
    if (quote.tags !== undefined) {
      tagArray.push(...quote.tags);
    }
  });
  const allTags = [...new Set(tagArray)];
  return allTags;
};
