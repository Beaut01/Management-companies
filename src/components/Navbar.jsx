import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#FFA07A'}}>
            <div className="container-fluid d-flex container">
                <NavLink className="navbar-brand" to="/">Управляющие компании</NavLink>
            </div>
        </nav>
    )
}