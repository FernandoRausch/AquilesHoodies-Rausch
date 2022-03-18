import React from "react"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return(
        <header>
            <NavLink to="/"><h1>Aquiles Hoodies</h1></NavLink>
            <nav class="nav">
            <NavLink to="/:categoryId"><ul>Shop</ul></NavLink>
            <NavLink to="/:categoryId"><ul>Nosotros</ul></NavLink>
            <NavLink to="/:categoryId"><ul>Contacto</ul></NavLink>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar