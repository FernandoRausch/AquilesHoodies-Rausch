import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
        <article className="items">
            <p className="tituloItems" key={item.id}>{item.nombre}</p>
            <img className="imagenItems" src={item.imagen} alt="hoodie"/>
            <p >${item.precio}</p>
            <Link className="detailButton" to={`/detail/${item.id}`}><p>Comprar</p></Link>
        </article>
    )}

export default Item