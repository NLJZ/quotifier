const headerReducer = (state = "", action) => {
  switch (action.type) {
    case "SHOW_ALL_QUOTES":
      return "All Quotes";
    case "SHOW_RECENT_QUOTES":
      return "Last 5 Quotes";
    default:
      return state;
  }
};

export default headerReducer;
