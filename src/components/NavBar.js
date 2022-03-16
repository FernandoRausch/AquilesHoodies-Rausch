import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header>
            <h1>Aquiles Hoodies</h1>
            <nav>
            <li>Inicio</li>
            <li>Shop</li>
            <li>Nosotros</li>
            <li>Contacto</li>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar