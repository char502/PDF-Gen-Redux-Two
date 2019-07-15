import { SEND_TO_REDUX } from "./types";

export const sendToRedux = data => {
    return {
        type: SEND_TO_REDUX,
        payload: data
    };
};