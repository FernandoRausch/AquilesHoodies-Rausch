import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header>
            <h1>Aquiles Hoodies</h1>
            <nav class="nav">
            <ul>Inicio</ul>
            <ul>Shop</ul>
            <ul>Nosotros</ul>
            <ul>Contacto</ul>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar