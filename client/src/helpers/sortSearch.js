export const getAllTags = async (quotes) => {
  const quoteArray = Object.values(quotes);
  const tagArray = [];
  await quoteArray.forEach((quote) => {
    if (quote.tags !== undefined) {
      tagArray.push(...quote.tags);
    }
  });
  const allTags = [...new Set(tagArray)];
  console.log(allTags);
  return null;
};
