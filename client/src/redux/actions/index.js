export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "SIGN_IN",
  };
};

export const logout = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const getUser = (data) => {
  return {
    type: "USER_NAME",
    payload: data,
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const loadSources = (sources) => {
  return {
    type: "LOAD_SOURCES",
    payload: sources,
  };
};

export const loadQuotes = (quotes) => {
  return {
    type: "LOAD_QUOTES",
    payload: quotes,
  };
};

export const addSource = (source) => {
  return {
    type: "ADD_SOURCE",
    payload: source,
  };
};

export const addQuote = (quote) => {
  return {
    type: "ADD_QUOTE",
    payload: quote,
  };
};

export const showAllQuotes = (quotes) => {
  return {
    type: "SHOW_ALL_QUOTES",
    payload: quotes,
  };
};

export const showRecentQuotes = (quotes) => {
  return {
    type: "SHOW_RECENT_QUOTES",
    payload: quotes,
  };
};

export const showFavoriteQuotes = (quotes) => {
  return {
    type: "SHOW_FAVORITE_QUOTES",
    payload: quotes,
  };
};

export const filterQuotesByTag = (tags) => {
  return {
    type: "FILTER_QUOTES_BY_TAG",
    payload: tags,
  };
};

export const filterQuotesBySource = (sources) => {
  return {
    type: "FILTER_QUOTES_BY_SOURCE",
    payload: sources,
  };
};

export const filterQuotesByFave = (quotes) => {
  return {
    type: "FILTER_QUOTES_BY_FAVE",
    payload: quotes,
  };
};

export const loadFaves = (quotes) => {
  return {
    type: "LOAD_FAVES",
    payload: quotes,
  };
};

export const loadTags = (tags) => {
  return {
    type: "LOAD_TAGS",
    payload: tags,
  };
};

export const quoteViewerOn = () => {
  return {
    type: "QUOTE_VIEWER_ON",
  };
};

export const quoteViewerOff = () => {
  return {
    type: "QUOTE_VIEWER_OFF",
  };
};

export const showAllSources = (sources) => {
  return {
    type: "SHOW_ALL_SOURCES",
    payload: sources,
  };
};

export const sortNewToOld = () => {
  return {
    type: "SORT_NEW_TO_OLD",
  };
};

export const sortOldToNew = () => {
  return {
    type: "SORT_OLD_TO_NEW",
  };
};

export const addToTagFilter = (tag) => {
  return {
    type: "ADD_TO_TAG_FILTER",
    payload: tag,
  };
};

export const resetTagFilter = () => {
  return {
    type: "RESET_TAG_FILTER",
  };
};

export const addToSourceFilter = (source) => {
  return {
    type: "ADD_TO_SOURCE_FILTER",
    payload: source,
  };
};

export const resetSourceFilter = () => {
  return {
    type: "RESET_SOURCE_FILTER",
  };
};

export const setActiveFilters = (tags, sources) => {
  return {
    type: "SET_ACTIVE_FILTERS",
    payload: tags,
    sources,
  };
};

export const resetActiveFilters = () => {
  return {
    type: "RESET_ACTIVE_FILTERS",
  };
};
