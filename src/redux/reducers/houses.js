import { SET_HOUSES } from "../types"

const initialState = {
    houses: []
}

export const housesReducer = (state = initialState, action)=> {
    switch(action.type){
        case SET_HOUSES: 
            return{
                ...state,
                houses: action.payload.filter((item, index, arr) => arr.map((item) => item.houseId).indexOf(item.houseId) === index)
            }
        default: 
            return state
    }
}