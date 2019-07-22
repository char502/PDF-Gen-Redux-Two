import { SEND_PRODSELECTION_TO_REDUX } from "./types";

export const sendProdSelectionToRedux = (data) => {
  return {
    type: SEND_PRODSELECTION_TO_REDUX,
    payload: data
  };
};
