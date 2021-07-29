import { SET_FLATS } from "../types"

const initialState = {
    flats: []
}

export const flatReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FLATS:
            return{
                ...state,
                flats: action.payload
            }
        default:
            return state
    }
}