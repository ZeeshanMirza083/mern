import { login } from "./login";
import { test } from "./test";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    login,
    test
})

export default rootReducer;

