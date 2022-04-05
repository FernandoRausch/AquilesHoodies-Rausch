import React,{useContext} from 'react';
import {contexto} from "./CartContext.js";
import {db} from "./Firebase";
import {collection,addDoc} from "firebase/firestore";
import {Link} from 'react-router-dom';
const Shop = () => {
    const { carrito, total, borrarProd,vaciarCarrito } = useContext(contexto);
    const terminarCompra = () => {
        const orden = {
            buyer:{
                nombre: "name",
                telefono: "tel",
                email: "asd@gmail.com"
            },
            items : carrito,
        }
        const ordenesCollection = collection (db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)
            pedido
            .then(res=>{console.log(res)})
            .catch(error=>{console.log(error)})
    }
    return (<>
        {carrito.length === 0 ? (
        <div
            style={{
                    margin: "7%",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
            <p>¡Aún no seleccionaste productos para comprar!</p>
            <Link className='linkCart' to="/"> Volver a la pagina principal </Link>
            <div>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/empty-cart-2685174-2232751.png" alt="empty-cart" />
            </div>
        </div>) 
        :
        (           
        <div>
            <div className='tituloCart'>
                <h2 className='cart_h3'>Mi carrito</h2>
                <button ><Link  to="/">Seguir comprando</Link></button>
            </div>
            <table border="1px" className='cart_table'>
            <tr>
                <th className='eliminarProd'>Eliminar producto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio c/u</th>
                <th>Subtotal</th>  
            </tr>        
            {carrito.map((item) => (
            <>                     
                <tr>
                    <td><button className='material-icons' onClick={() => borrarProd(item.id)}>delete</button></td>
                    <td>{item.nombre}</td>
                    <td>{item.cantidad}</td>
                    <td>$ {item.precio}</td>
                    <td> $ {item.precio * item.cantidad}</td>        

                </tr>                        
            </>))}
                <tr>
                    <td></td>                            
                    <td></td>
                    <td></td>
                    <td><b>Total:</b> </td>
                    <td><b>$ {total()}</b> </td>        
                </tr>   
                <div className='cartButtons'>
                <button onClick={terminarCompra}>Terminar compra</button>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                </div>
            </table>
        </div>)}
    </>
    )
}

export default Shop