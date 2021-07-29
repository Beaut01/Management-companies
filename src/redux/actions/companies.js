import axios from "axios";
import { SET_COMPANIES, SET_LOADING } from "../types";

export const setLoading = payload => ({
    type: SET_LOADING,
    payload: payload
})

export const setCompanies = items => ({
    type: SET_COMPANIES,
    payload: items
})

export const fetchCompanies = () => (dispatch) => {
    dispatch(setLoading(true))
    axios.get('https://dispex.org/api/vtest/Request/companies').then(({data}) => {
        dispatch(setCompanies(data))
    })
}