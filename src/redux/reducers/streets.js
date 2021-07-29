import { SET_STREETS } from "../types"

const initialState = {
    streets: [],
    loading: true,
}

export const streetsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_STREETS:
            return{
                ...state,
                streets: action.payload.filter((item, index, arr) => arr.map((item) => item.streetId).indexOf(item.streetId) === index),
                loading: false
            }
        default: 
            return state
    }
}