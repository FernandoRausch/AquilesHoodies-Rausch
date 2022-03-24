import React from "react"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return(
        <header>
            <NavLink to="/"><h1>Aquiles Hoodies</h1></NavLink>
            <nav class="nav">
            <NavLink to="/category/1"><ul>Shop</ul></NavLink>
            <NavLink to="/category/2"><ul>Nosotros</ul></NavLink>
            <NavLink to="/category/3"><ul>Contacto</ul></NavLink>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar