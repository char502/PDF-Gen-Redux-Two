import { SEND_PRODSELECTION_TO_REDUX } from "../actions/types";

const initialState = {
  configOption: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_PRODSELECTION_TO_REDUX:
      return {
        ...state,
        configOption: state.configOption.concat(action.payload)
      };

    default:
      return state;
  }
}

// const initialState = {
//   configOptions: {
//     one: "",
//     two: "",
//     three: ""
//   }
// };

// // const initialState = {
// //   selectedConfigOptions: []
// // }

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case SEND_PRODSELECTION_TO_REDUX:
//       return {
//         ...state,
//         configOptions: {
//           ...state.configOptions,
//           [action.key]: state.configOptions[action.key]
//         }
//       };

//     default:
//       return state;
//   }
// }

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case SEND_PRODSELECTION_TO_REDUX:
//       return {
//         ...state,
//         configOption: action.payload
//       };

//     default:
//       return state;
//   }
// }

// const sendProdSelectionToRedux = (namespace) => (
//   state = initialState,
//   action
// ) => {
//   switch (action.type) {
//     // case `${namespace}/${SEND_PRODSELECTION_TO_REDUX}`:
//     case SEND_PRODSELECTION_TO_REDUX:
//       return {
//         ...state,
//         configOption: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default sendProdSelectionToRedux;

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
