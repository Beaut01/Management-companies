import axios from "axios";
import { SET_FLATS } from "../types";

export const setFlats = items => ({
    type: SET_FLATS,
    payload: items
})

export const fetchFlats = (id, streetId, houseId) => (dispatch) => {
    axios.get(`https://dispex.org/api/vtest/HousingStock?companyId=${id}&streetId=${streetId}&houseId=${houseId}`).then(({data}) => {
        dispatch(setFlats(data))
    })
}

export const deleteClient = (id) => {
    axios.delete(`https://dispex.org/api/vtest/HousingStock/bind_client/${id}`)
}