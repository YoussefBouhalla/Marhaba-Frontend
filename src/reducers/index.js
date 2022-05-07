import authReducer from "./authReducer";
import popupReducer from "./popupReducer";
import alertReducer from "./alertReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    token : authReducer,
    popup: popupReducer,
    alert: alertReducer
})

export default allReducers; 