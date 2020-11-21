import { getAllTags } from "../../helpers/sortSearch";
import produce from "immer";

const favesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_TAGS":
      const tagsArr = getAllTags(action.payload).sort();
      return tagsArr;
    default:
      return state;
  }
};

export default favesReducer;
