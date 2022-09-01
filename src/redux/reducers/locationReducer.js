import { ActionTypes } from "../constants/action-types";

const initialState = {
  locations: [],
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_LOCATIONS:
      return { ...state, ...state.locations.push(action.payload) };
    default:
      return state;
  }
};
