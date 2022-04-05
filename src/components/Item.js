import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
        <article className="items">
            <h2 className="tituloItems" key={item.id}>{item.nombre}</h2>
            <img className="imagenItems" src={item.imagen} alt="hoodie"/>
            <p >${item.precio}</p>
            <Link className="detailButton" to={`/detail/${item.id}`}>Ver detalle</Link>
        </article>
    )}

export default Item