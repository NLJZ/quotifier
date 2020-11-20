import produce from "immer";
const tagFilterReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_TAG_FILTER":
      const base = [...state, action.payload];
      return base;
    case "RESET_TAG_FILTER":
      const resetArr = [];
      return resetArr;
    default:
      return state;
  }
};

export default tagFilterReducer;
