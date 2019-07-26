import { createStore, combineReducers } from "redux";
import pdfGenReducer from "../redux/reducers/pdfGenReducer";
import simpleTestReducer from "../redux/reducers/simpleTestReducer";
import textArea from "../redux/reducers/textArea";
import sendProdSelectionToRedux from "../redux/reducers/sendProdSelectionToRedux";
import product_sow from '../redux/reducers/product_sow';

export default () => {
  const store = createStore(
    combineReducers({
      pdfGen: pdfGenReducer,
      testReducer: simpleTestReducer,
      textArea,
      sendProdSelectionToRedux,
      product_sow
      // myInstance1: sendProdSelectionToRedux("myInstance1"),
      // myInstance2: sendProdSelectionToRedux("myInstance2"),
      // myInstance3: sendProdSelectionToRedux("myInstance3"),
      // myInstance4: sendProdSelectionToRedux("myInstance4")
    }),
    //Have to turn off when push to heroku as will give an error
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
