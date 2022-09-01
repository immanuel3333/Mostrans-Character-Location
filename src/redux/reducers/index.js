import { combineReducers } from "redux";
import { characterReducer, selectedCharacterReducer } from "./characterReducer";
import { locationReducer } from "./locationReducer";

const reducers = combineReducers({
  allCharacters: characterReducer,
  character: selectedCharacterReducer,
  locations: locationReducer,
});

export default reducers;
