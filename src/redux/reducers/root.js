import { combineReducers } from "redux";
import { companiesReducer } from "./companies";
import { streetsReducer } from "./streets";
import { housesReducer } from './houses'
import { flatReducer } from "./flats";

export const rootReducer = combineReducers({
    companies: companiesReducer,
    streets: streetsReducer,
    houses: housesReducer,
    flats: flatReducer
})