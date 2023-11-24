import React from 'react';

export const NavBar = () => {
    return (
        <>
            <div className="nombre">
                <h1>Maxikiosco La Barra</h1>
            </div>
            <div className="logo">
                <a href="./index.html"><img src={process.env.PUBLIC_URL + '/Img/logo.png'} alt="logo" className="logo" /></a>
            </div>
            <nav className="nav-container">
                <ul className="nav__menu">
                    <li>
                        <a href="./pages/catalogo.html" className="nav__li">Catalogo</a>
                    </li>
                    <li>
                        <a href="./pages/sobrenosotros.html" className="nav__li">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="./pages/subscribete.html" className="nav__li">Subscribite</a>
                    </li>
                    <li>
                        <a href="./pages/carrito.html"><img src={process.env.PUBLIC_URL + '/Img/carros.png'} alt="carrito" className="nav__carrito" /></a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;