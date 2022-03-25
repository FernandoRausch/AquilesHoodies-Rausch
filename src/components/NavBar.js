import { Link , NavLink } from "react-router-dom"


const NavBar = () => {
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
            </Link>
            </nav>
        </header>
    )
}

export default NavBar