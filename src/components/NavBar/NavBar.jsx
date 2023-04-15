import React from 'react'
import './navbar.css'
import { Cartwidget } from '../CartWidget/Cartwidget'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <div className='menuProvisorio'>
            <Link to="/">Inicio</Link>
            <Link to='/productos/Tecnologia'>Tecnología</Link>
            <Link to='/productos/Indumentaria'>Indumentaria</Link>
            <Link to="/counter"> Contador </Link>
            <Link to="/Pika"> Pokemones </Link>
            <Link to="/cart"> <Cartwidget /> </Link>
            
        </div>
    )
}

