const quoteView = (state = "", action) => {
  switch (action.type) {
    case "SHOW_FAVORITE_QUOTES":
      return "favorites";
    case "SHOW_ALL_QUOTES":
      return "all";
    case "SHOW_RECENT_QUOTES":
      return "recent";
    case "SHOW_SEARCH_RESULTS":
      return "search";
    case "QUOTE_VIEWER_OFF":
      return false;
    default:
      return state;
  }
};

export default quoteView;
