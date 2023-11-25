import './Navbar.css'

import CartWidget from '../CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
    return (
        <>
            <header className='header'>
                <div className='container__nl'>
                    <div className="nombre">
                        <h1>Maxikiosco La Barra</h1>
                    </div>
                    <div className="logo">
                        <NavLink to='/'><img src={process.env.PUBLIC_URL + '/Img/logo.png'} alt="logo" className="logo" /></NavLink>
                    </div>
                </div>
                <nav className="nav-container">
                    <ul className="nav__menu">
                        <li>
                            <NavLink to="/categoria/bebidas" className="nav__li">Bebidas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/categoria/golosinas" className="nav__li">Golosinas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/categoria/chocolates" className="nav__li">Chocolates</NavLink>
                        </li>
                        <li>
                            <NavLink to="/categoria/regaleria" className="nav__li">regaleria</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">
                                <CartWidget />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavBar;