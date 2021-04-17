import {
  UPDATE_CATEGORY,
  UPDATE_DATE,
  RESET_FILTER,
} from "./action.types";

export const updateCategory = (category) => ({
  type: UPDATE_CATEGORY,
  payload: category,
});

export const updateDate = (date) => ({
  type: UPDATE_DATE,
  payload: date,
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});
