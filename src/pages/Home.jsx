import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchCompanies } from '../redux/actions/companies'

export const Home = () => {
    const dispatch = useDispatch()

    const {companies} = useSelector(store => store.companies)

    React.useEffect(() => {
        dispatch(fetchCompanies())
    }, [dispatch])

    return(
        <div className='container'>
            <div className='row' style={{marginTop: '200px'}}>
            {companies.map((company)=>(
                <div className='col-sm-4 d-flex justify-content-center' style={{marginBottom: '75px'}} key={company.id}>
                    <h5 className='companies--title'>{company.name}</h5>
                </div>
            ))}
            </div>
        </div>
    )
}