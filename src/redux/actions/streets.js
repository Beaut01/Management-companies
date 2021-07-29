import axios from "axios";
import { SET_STREETS } from "../types";
import { setLoading } from "./companies";

export const setStreets = items => ({
    type: SET_STREETS,
    payload: items
})

export const fetchStreets = (id) => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`https://dispex.org/api/vtest/HousingStock?companyId=${id}`).then(({data}) => {
        dispatch(setStreets(data))
    })
} 