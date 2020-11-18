import { sortByDate, getFaves } from "../../helpers/sortSearch";
import produce from "immer";

const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_ALL_QUOTES":
      const baseState = [];
      const arr = sortByDate(action.payload, "new");
      const allQuotesArr = produce(baseState, (draft) => {
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
      const base = [...state];
      const newnewArray = sortByDate(base, "old");
      const sortedNewToOld = produce(newnewArray, (draft) => {
        newnewArray.forEach((item) => {
          draft.push(item);
        });
      });
      return sortedNewToOld;
    case "SORT_OLD_TO_NEW":
      const newBase = [...state];
      const arrayToChange = sortByDate(newBase, "old");
      const sortedOldToNew = produce(arrayToChange, (draft) => {
        arrayToChange.forEach((item) => {
          draft.push(item);
        });
      });
      return sortedOldToNew;
    default:
      return state;
  }
};

export default quotesReducer;
