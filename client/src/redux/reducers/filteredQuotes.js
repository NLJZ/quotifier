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
    default:
      return state;
  }
};

export default quotesReducer;
