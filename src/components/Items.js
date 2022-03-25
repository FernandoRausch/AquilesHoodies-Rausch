const itemsIniciales = [
    {
        id:1,
        nombre: "Hoodie con capucha",
        precio: 100,
        imagen: "https://i.pinimg.com/originals/f5/98/67/f59867a5279ebb9ea1a7d866d0951f20.jpg",
        category: "con"
    },
    {
        id:2,
        nombre: "Hoodie sin capucha",
        precio: 200,
        imagen: "https://i.pinimg.com/originals/f5/98/67/f59867a5279ebb9ea1a7d866d0951f20.jpg",
        category: "sin"
    },
    {
        id:3,
        nombre: "Hoodie canguro",
        precio: 300,
        imagen: "https://i.pinimg.com/originals/f5/98/67/f59867a5279ebb9ea1a7d866d0951f20.jpg",
        category: "canguro"
    }
]

export const pedidoItems = (id) => {
    return new Promise((res, rej) => {
        const itemFiltrados = itemsIniciales.filter((prod) => prod.category === id);
        setTimeout(() => {
            id ? res(itemFiltrados) : res(itemsIniciales);
        }, 1000);
    });
};

export const pedidoItem = (id) => {
    return new Promise((res, rej) => {
        const item = itemsIniciales.find((prod) => prod.id === parseInt(id));
        setTimeout(() => {
            res(item);
        }, 1000);
    });
};
