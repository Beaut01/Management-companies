import { combineReducers } from "redux";
import { companiesReducer } from "./companies";

export const rootReducer = combineReducers({
    companies: companiesReducer
})