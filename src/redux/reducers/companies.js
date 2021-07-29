import { SET_COMPANIES, SET_LOADING } from "../types"

const initialState = {
    companies: [],
    loading: true
}

export const companiesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_COMPANIES:
            return{
                ...state,
                companies: action.payload,
                loading: false
            }
        case SET_LOADING: 
            return{
                ...state,
                loading: action.payload
            }
        default: 
            return state
    }
}