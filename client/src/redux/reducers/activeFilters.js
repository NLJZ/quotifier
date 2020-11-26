const activeFilterReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ACTIVE_FILTERS":
      const base = action.payload;
      return base;
    case "RESET_ACTIVE_FILTERS":
      const resetArr = [];
      return resetArr;
    default:
      return state;
  }
};

export default activeFilterReducer;
