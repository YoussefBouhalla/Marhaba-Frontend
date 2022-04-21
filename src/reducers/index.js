import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import popupReducer from "./popupReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    authentitcated : authReducer,
    role: roleReducer,
    popup: popupReducer
})

export default allReducers; 