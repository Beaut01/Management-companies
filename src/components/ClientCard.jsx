import React from 'react'

export const ClientCard = ({name, email, phone, onDelete}) => {
    return(
        <div className='col-sm-2'>
            <div className='card'>
                <h5>{name}</h5>
                <h6>{email}</h6>
                <h6>{phone}</h6>
                <button className='btn btn-danger' onClick={onDelete}>Удалить</button>
            </div>
        </div>
    )
}