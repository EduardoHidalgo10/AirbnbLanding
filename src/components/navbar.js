import React from 'react'
import Logo from '../img/logo.jpg'

export const Navbar = () => {
    return (
        <div className='header'>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <img src={Logo} alt='Logo' />
                <nav className="my-2 my-md-0 mr-md-3">
                </nav>

            </div>
        </div>
    )
}
