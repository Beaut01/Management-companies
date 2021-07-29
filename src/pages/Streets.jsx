import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { fetchStreets } from '../redux/actions/streets'
import { fetchHouses } from '../redux/actions/houses'
import { fetchFlats } from '../redux/actions/flats'

export const Streets = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { streets } = useSelector( store => store.streets)
    const { houses } = useSelector( store => store.houses)
    const { flats } = useSelector( store => store.flats)
    
    React.useEffect(() => {
        dispatch(fetchStreets(id))
    }, [dispatch, id])

    const handleFetchHouses = (id, streetId) => {
        dispatch(fetchHouses(id, streetId))
    }

    const handleFetchFlats = (id, streetId, houseId) => {
        dispatch(fetchFlats(id, streetId, houseId))
    }

    return(
        <div className='container'>
            <div className='row'>
                {streets.map(street => (
                    <div className='col-sm-2 mt-4 justify-content-center' key={street.addressId} onClick={() => handleFetchHouses(id, street.streetId)}>
                        <h6 className='streets--title' >
                            {street.streetName}
                            <span className='streets--chevron'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                        </span>
                        </h6>
                        {houses.map(house => (
                            <div className='col-sm-12' onClick={() => handleFetchFlats(id, street.streetId, house.houseId)} key={house.addressId}>
                                <h4>Дом №{house.building}/{house.corpus}</h4>
                                {flats.map(flat => (
                                    <div className='col-sm-12' key={flat.addressId}>
                                        <NavLink to={`/client/${flat.addressId}`}>
                                            <h6>Квартира №{flat.flat}</h6>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}