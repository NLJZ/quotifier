import { sortByDate, getFaves } from "../../helpers/sortSearch";
import produce from "immer";

const favesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_FAVES":
      const favesArr = getFaves(action.payload);
      return favesArr;
    default:
      return state;
  }
};

export default favesReducer;
