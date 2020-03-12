import { combineReducers } from "redux";

import lastClientReducer from "./lastClientReducer";
import lastSollicitantReducer from "./lastSollicitantReducer";
import lastStrijkenReducer from "./lastStrijkenReducer";
export default combineReducers({
  lastClient: lastClientReducer,
  lastSollicitant: lastSollicitantReducer,
  lastStrijken: lastStrijkenReducer
});
