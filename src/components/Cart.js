import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from "./CartContext.js"

const Shop = () => {
    const { carrito, total } =
        useContext(contexto);



    return (
        <>
                <div>
                    {carrito.map((item) => (
                        <div>
                            <div>
                                <h3>Nombre: {item.nombre}</h3>
                                <h4>Cantidad: {item.cantidad}</h4>
                                <h4>Precio c/u: $ {item.precio}</h4>
                                <h4>
                                    Subtotal: $ {item.precio * item.cantidad}
                                </h4>
                                


                            </div>
                            
                        </div>
                    ))}
                    <h4 >
                                    Total: $ {total()}
                                </h4>
                </div>
 
        </>
    )
}

export default Shop