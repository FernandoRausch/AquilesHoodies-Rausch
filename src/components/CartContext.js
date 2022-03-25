import React, {createContext, useState } from 'react';

export const contexto = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (producto, cant) => {
        isOnCart(producto.id)
            ? sumarCantidad(producto, cant)
            : setCart([...cart, { ...producto, cant }]);
    };

    const isOnCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (producto, cant) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === producto.id) {
                const newProduct = {
                    ...prod,
                    cant: prod.cant + cant,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    const calcularTotal = () => {
        let totalCarrito = 0;
        cart.forEach((prod) => {
            totalCarrito += prod.precio * prod.cant;
        });
        return totalCarrito;
    };

    const borrarProd = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    return (
        <contexto.Provider
            value={{
                cart,
                addToCart,
                vaciarCarrito,
                calcularTotal,
                borrarProd,
            }}
        >
            {children}
        </contexto.Provider>
    );
};
