import { combineReducers } from "redux";

import latestClientReducer from "./latestClientReducer";
import latestSollicitantReducer from "./latestSollicitantReducer";
import latestStrijkenReducer from "./latestStrijkenReducer";
export default combineReducers({
  latestClient: latestClientReducer,
  latestSollicitant: latestSollicitantReducer,
  latestStrijken: latestStrijkenReducer
});
