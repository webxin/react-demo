import manage from "./manage.js";
import index from "./index.js";
import {createStore,combineReducers} from "redux";
const rootReducer = combineReducers({
  	manage,
    index
});
let store=createStore(rootReducer);
export default store; 