import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ClientCard } from '../components/ClientCard'
import { deleteClient } from '../redux/actions/flats'

export const Clients = () => {
    const { flats } = useSelector( store => store.flats)
    const { addressId } = useParams()
    const flat = flats.find(f => f.addressId == addressId)
    const clients = flat.clients
    
    const handleDeleteClient = (id) => {
        dispatchEvent(deleteClient(id))
    }

    return(
        <div className='container'>
            <div className='row'>
                {clients.map(client => (
                    <ClientCard {...client} key={client.id} onDelete={handleDeleteClient} />
                ))}
            </div>
        </div>
    )
}