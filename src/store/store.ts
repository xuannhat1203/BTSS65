import { combineReducers, createStore } from "redux";
import reducerProfile from "./reducers/BT01";
import reducerList from "./reducers/BT02";
import reducerFruit from "./reducers/BT03";
import reducerCount from "./reducers/BT04";
import reducerRandom from "./reducers/BT05";
import reducerText from "./reducers/BT06";
import reducerStatus from "./reducers/BT07";
import reducerJobs from "./reducers/BT10";
const rootReducer = combineReducers({
  reducerProfile,
  reducerList,
  reducerFruit,
  reducerCount,
  reducerRandom,
  reducerText,
  reducerStatus,
  reducerJobs,
});
const store = createStore(rootReducer);
export default store;
