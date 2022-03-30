import { Link , NavLink } from "react-router-dom"
import { contexto } from "./CartContext.js"
import { useContext } from "react"

const NavBar = () => {
    const {calcCantidad} = useContext(contexto)
    return(
        <header>
            <NavLink to="/"><h1>Aquiles Hoodies</h1></NavLink>
            <nav class="nav">
            <NavLink to="/category/con"><ul>Con capucha</ul></NavLink>
            <NavLink to="/category/sin"><ul>Sin capucha</ul></NavLink>
            <NavLink to="/category/canguro"><ul>Canguro</ul></NavLink>
            <Link to="/cart">            
                <span className="material-icons">
                    shopping_cart
                </span>
                {calcCantidad()}
            </Link>
            </nav>
        </header>
    )
}

export default NavBar