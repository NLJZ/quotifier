import {
  sortByDate,
  getFaves,
  findQuotesByTag,
  findQuotesBySource,
  searchData,
} from "../../helpers/sortSearch";
import produce from "immer";

const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_ALL_QUOTES":
      const arr = sortByDate(action.payload, "new");
      let baseState = [...state];
      const allQuotesArr = produce(baseState, (draft) => {
        draft.splice(0, draft.length);
        arr.forEach((quote) => draft.push(quote));
      });
      return allQuotesArr;
    case "SHOW_RECENT_QUOTES":
      const quoteArr = sortByDate(action.payload, "new");
      const recentQuotesArr = quoteArr.slice(0, 5);
      return recentQuotesArr;
    case "SHOW_FAVORITE_QUOTES":
      const faveQuoteArr = sortByDate(action.payload, "new");
      const favoriteQuotes = getFaves(faveQuoteArr);
      return favoriteQuotes;
    case "SORT_NEW_TO_OLD":
      const sortedNewToOld = sortByDate([...state], "new");
      return sortedNewToOld;
    case "SORT_OLD_TO_NEW":
      const sortedOldToNew = sortByDate([...state], "old");
      return sortedOldToNew;
    case "FILTER_QUOTES_BY_TAG":
      const filteredByTag = findQuotesByTag(action.payload, [...state]);
      return filteredByTag;
    case "FILTER_QUOTES_BY_SOURCE":
      const filteredBySource = findQuotesBySource(action.payload, [...state]);
      return filteredBySource;
    case "SHOW_SEARCH_RESULTS":
      const searchResults = searchData();
      return searchResults;
    default:
      return state;
  }
};

export default quotesReducer;
