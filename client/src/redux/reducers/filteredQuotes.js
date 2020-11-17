import { sortByDate, getFaves } from "../../helpers/sortSearch";
import produce from "immer";

const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_ALL_QUOTES":
      const baseState = [];
      const newArr = sortByDate(action.payload, "new");
      const allQuotesArr = produce(baseState, (draft) => {
        newArr.forEach((quoteID) => draft.push(quoteID));
      });
      return allQuotesArr;
    case "LOAD_FAVES":
      return allQuotesArr;
    default:
      return state;
  }
};

export default quotesReducer;
