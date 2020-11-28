const sourceFilterReducer = (state = "", action) => {
  switch (action.type) {
    case "SAVE_SEARCH_STRING":
      const searchString = action.payload;
      return searchString;
    default:
      return state;
  }
};

export default sourceFilterReducer;
