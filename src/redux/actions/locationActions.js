import { ActionTypes } from "../constants/action-types";

export const createLocations = (locations) => {
  return {
    type: ActionTypes.CREATE_LOCATIONS,
    payload: locations,
  };
};
