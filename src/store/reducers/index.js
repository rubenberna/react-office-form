import { combineReducers } from "redux";

import latestClientsReducer from "./latestClientsReducer";
import latestSollicitantsReducer from "./latestSollicitantsReducer";
import latestStrijksReducer from "./latestStrijksReducer";
export default combineReducers({
  latestClients: latestClientsReducer,
  latestSollicitants: latestSollicitantsReducer,
  latestStrijken: latestStrijksReducer
});