import produce from "immer";
const tagFilterReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_TAG_FILTER":
      const base = [...state, action.payload];
      return base;
    case "QUOTE_VIEWER_OFF":
      return false;
    default:
      return state;
  }
};

export default tagFilterReducer;
