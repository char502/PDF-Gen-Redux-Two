import { SEND_PRODSELECTION_TO_REDUX } from "../actions/types";

const initialState = {
  configOption: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_PRODSELECTION_TO_REDUX:
      return {
        ...state,
        configOption: action.payload
      };

    default:
      return state;
  }
}

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case SEND_PRODSELECTION_TO_REDUX:
//             const {
//                 payload: { type, results }
//             } = action;
//             return {
//                 ...state,
//                 [type]: results
//             };

//         default:
//             return state;
//     }
// }
