import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchStreets } from '../redux/actions/streets'
import { fetchHouses } from '../redux/actions/houses'

export const Streets = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { streets } = useSelector( store => store.streets)
    const { houses } = useSelector( store => store.houses)
    
    React.useEffect(() => {
        dispatch(fetchStreets(id))
    }, [dispatch, id])

    const handleFetchHouses = (id, streetId) => {
        dispatch(fetchHouses(id, streetId))
    }

    return(
        <div className='container'>
            <div className='row'>
                {streets.map(street => (
                    <div className='col-sm-2 mt-4 justify-content-center d-flex' key={street.addressId} onClick={() => handleFetchHouses(id, street.streetId)}>
                        <h6 className='streets--title' >
                            {street.streetName}
                            <span className='streets--chevron'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                        </span>
                        </h6>
                    </div>
                ))}
                {houses.map(house => (
                    <div className='col-sm-2'>
                        <h6>Дом №{house.building}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}