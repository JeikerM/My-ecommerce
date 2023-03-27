import React from 'react'
import './navbar.css'
import { Cartwidget } from '../CartWidget/Cartwidget'
export const NavBar = () => {
    return (
        <div className='menuProvisorio'>
            <p>Ecommerce</p>
            <p>link 1</p>
            <p>link 1</p>
            <p>link 1</p>
            <Cartwidget/>
        </div>
    )
}

