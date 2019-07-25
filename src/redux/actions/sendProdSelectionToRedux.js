import { SEND_PRODSELECTION_TO_REDUX } from "./types";

export const sendProdSelectionToRedux = (data) => {
  return {
    // type: `${namespace}/${SEND_PRODSELECTION_TO_REDUX}`,
    type: SEND_PRODSELECTION_TO_REDUX,
    id: 0,
    payload: data
  };
};
