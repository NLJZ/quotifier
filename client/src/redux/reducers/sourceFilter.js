import produce from "immer";
const sourceFilterReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_SOURCE_FILTER":
      const base = [...state, action.payload];
      return base;
    case "RESET_SOURCE_FILTER":
      const resetArr = [];
      return resetArr;
    default:
      return state;
  }
};

export default sourceFilterReducer;
