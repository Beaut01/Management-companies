import axios from "axios";
import { SET_HOUSES } from "../types";

export const setHouses = items => ({
    type: SET_HOUSES,
    payload: items
})


export const fetchHouses = (id, streetId) => (dispatch) => {
    axios.get(`https://dispex.org/api/vtest/HousingStock?companyId=${id}&streetId=${streetId}`).then(({data}) => {
        dispatch(setHouses(data))
    })
}