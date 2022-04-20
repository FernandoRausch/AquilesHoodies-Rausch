import { Link , NavLink } from "react-router-dom"
import { contexto } from "./CartContext.js"
import { useContext } from "react"

const NavBar = () => {
    const {calcCantidad} = useContext(contexto)

    return(
        <header className="header">
            <div className="nav">
                <div className="imagenLogo"><NavLink to="/"><img width="90px" src="salchicha.jpg" alt="" /></NavLink><NavLink to="/"><h1>AQUILES HOODIES</h1></NavLink></div>    
                <div class="search"><input type="text" placeholder="Buscar..."></input><button type="submit">Buscar</button></div>
                <div className="icon"><Link to="/cart"><span className="material-icons">shopping_cart</span>{calcCantidad()}</Link><Link to="/cart"><p>Mi carrito</p></Link></div>
            </div>
            <div className="nav2">
            <p><NavLink to="/category/con">Con capucha</NavLink></p>
            <p><NavLink to="/category/sin">Sin capucha</NavLink></p>
            <p><NavLink to="/category/canguro">Canguro</NavLink></p>
            </div>
        </header>
    )
}

export default NavBar