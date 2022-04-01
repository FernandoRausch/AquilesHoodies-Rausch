import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from "./CartContext.js"
import { db } from "./Firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Shop = () => {
    const { carrito, total } = useContext(contexto);
const orden = {
    buyer: {
        nombre: "name",
        telefono: "tel",
        email: "asd@gmail.com"
    },
    items : carrito,
    date : serverTimestamp,
    total : total
}
    const terminarCompra = () => {
        const ordenesCollection = collection (db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)
        pedido.then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <>
                <div>
                <h2 className='cart_h3'>Mi carrito</h2>
                    <table border="1px" className='cart_table'>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio c/u</th>
                            <th>Subtotal</th>  
                        </tr>        
                    {carrito.map((item) => (<>                     
                         <tr>
                            <td >{item.nombre}</td>
                            <td >{item.cantidad}</td>
                            <td >$ {item.precio}</td>
                            <td > $ {item.precio * item.cantidad}</td>        
                        </tr>                        
                                            </>
                    ))}
                        <tr>
                            <td ></td>
                            <td ></td>
                            <td ><b>Total:</b> </td>
                            <td ><b>$ {total()}</b> </td>        
                        </tr>   
                    </table>
                </div>
 
        </>
    )
}

export default Shop