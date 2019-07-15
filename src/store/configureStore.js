import { createStore, combineReducers } from "redux";
import pdfGenReducer from "../redux/reducers/pdfGenReducer";
import simpleTestReducer from "../redux/reducers/simpleTestReducer";
import textArea from "../redux/reducers/textArea";

export default () => {
  const store = createStore(
    combineReducers({
      pdfGen: pdfGenReducer,
      testReducer: simpleTestReducer,
      textArea
    }),
    //Have to turn off when push to heroku as will give an error
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
