import { ActionTypes } from "../constants/action-types";

export const setCharacters = (characters) => {
  return {
    type: ActionTypes.SET_CHARACTERS,
    payload: characters,
  };
};

export const selectedCharacter = (character) => {
  return {
    type: ActionTypes.SELECTED_CHARACTERS,
    payload: character,
  };
};
