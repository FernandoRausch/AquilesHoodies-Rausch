import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from "./CartContext.js"

const Shop = () => {
    const { cart, calcularTotal,} =
        useContext(contexto);



    return (
        <>
                <div>
                    {cart.map((prod) => (
                        <div>
                            <div>
                                <h3>Nombre: {prod.nombre}</h3>
                                <h4>Cantidad: {prod.cantidad}</h4>
                                <h4>Precio c/u: $ {prod.precio}</h4>
                                <h4>
                                    Subtotal: $ {prod.precio * prod.cantidad}
                                </h4>

                            </div>
                        </div>
                    ))}
                    <h2>Total: ${calcularTotal()}</h2>
                </div>
 
        </>
    )
}

export default Shop