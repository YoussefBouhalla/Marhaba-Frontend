import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    authentitcated : authReducer,
    role: roleReducer
})

export default allReducers; 