import { arrayToObject } from "../../helpers/arrayToObject.js";
import produce from "immer";
const sourcesReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_SOURCES":
      let newState = arrayToObject(action.payload, "_id");
      return newState;
    case "ADD_SOURCE":
      let newSource = action.payload;
      let newSourceId = newSource._id;
      const addedSourceObj = produce({ ...state }, (draft) => {
        draft[`${newSourceId}`] = newSource;
      });
      return addedSourceObj;
    default:
      return state;
  }
};

export default sourcesReducer;
