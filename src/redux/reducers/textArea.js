import { GET_TEXTAREA } from "../actions/types";

const initialState = {
  textarea: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TEXTAREA:
      return {
        ...state,
        textarea: action.payload
      };

    default:
      return state;
  }
}
