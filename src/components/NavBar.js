import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header>
            <h1>Aquiles Hoodies</h1>
            <nav>
                <a href="#">Inicio </a>
                <a href="#">Shop </a>
                <a href="#">Nosotros </a>
                <a href="#">Contacto </a>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar