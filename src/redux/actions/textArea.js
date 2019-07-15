import { GET_TEXTAREA } from "./types";

export const textArea = data => {
  return {
    type: GET_TEXTAREA,
    payload: data
  };
};
