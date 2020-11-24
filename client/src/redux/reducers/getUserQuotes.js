import { arrayToObject } from "../../helpers/arrayToObject.js";
import produce from "immer";
const quotesReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_QUOTES":
      let newState = arrayToObject(action.payload, "_id");
      return newState;
    case "ADD_QUOTE":
      let newQuote = action.payload;
      let newQuoteId = newQuote._id;
      const addedQuoteObj = produce({ ...state }, (draft) => {
        draft[`${newQuoteId}`] = newQuote;
      });
      return addedQuoteObj;
    default:
      return state;
  }
};

export default quotesReducer;
