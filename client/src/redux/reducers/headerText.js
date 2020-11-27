const headerReducer = (state = "", action) => {
  switch (action.type) {
    case "SHOW_ALL_QUOTES":
      return "All Quotes";
    case "SHOW_RECENT_QUOTES":
      return "Recent";
    case "SHOW_FAVORITE_QUOTES":
      return "Favorites";
    case "SHOW_SEARCH_RESULTS":
      return "Search Results";
    default:
      return state;
  }
};

export default headerReducer;
