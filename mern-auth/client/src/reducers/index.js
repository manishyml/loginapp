import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import landingReducer from "./landingReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  landing: landingReducer
});
