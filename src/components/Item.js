import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
        <article className="items">
            <ul key={item.id}>{item.nombre}</ul>
            <ul >${item.precio}</ul>
            <Link to={`/detail/${item.id}`}>Ver detalle</Link>
        </article>
    )}

export default Item