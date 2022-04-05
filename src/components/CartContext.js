import React, {createContext, useState } from 'react';
export const contexto = createContext();
const { Provider } = contexto
export const MiProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (item, cantidad) => {
        const copiaCarrito = [...carrito];
        const itemAlCarrito = { ...item, cantidad};        
        if(yaExisteEnCarrito(item.id)) {            
            let index = copiaCarrito.findIndex( producto => producto.id === producto.id)
            copiaCarrito[index].cantidad += cantidad;
            setCarrito(copiaCarrito)
        } 
        else{
            copiaCarrito.push(itemAlCarrito);
            setCarrito(copiaCarrito);
        }        
    }
    const yaExisteEnCarrito = (id) => {
        return carrito.some(producto => producto.id === id)
    }
    const calcCantidad = () =>{
        let cantidad= 0;
        carrito.forEach( item => cantidad = item.cantidad);
        return cantidad
    }
    const total = () =>{
        let totalCarrito= 0;
        carrito.forEach( item => totalCarrito += item.cantidad * item.precio);
        return totalCarrito
    }
    const borrarProd = (id) =>{
        setCarrito(carrito.filter((item) => item.id !== id));
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    };
    return (
        <Provider
            value={{
                carrito,
                addItem,
                calcCantidad,
                total,
                borrarProd,
                vaciarCarrito
            }}
        >
            {children}
        </Provider>
    );
};
