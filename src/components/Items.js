const itemsIniciales = [
    {
        id:1,
        nombre: "Hoodie con capucha marron",
        precio: 100,
        imagen: "https://i.pinimg.com/originals/f5/98/67/f59867a5279ebb9ea1a7d866d0951f20.jpg",
        category: "con",
        stock: 25
    },
    {
        id:2,
        nombre: "Hoodie Slytherin sin capucha",
        precio: 200,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_698411-MLA46432393423_062021-W.jpg",
        category: "sin",
        stock: 8
    },
    {
        id:3,
        nombre: "Hoodie NorthFace",
        precio: 300,
        imagen: "https://grimoldimediamanager.grimoldi.com/mediafiles/Grimoldi/2014/8_13/0/10/132/689198.jpg",
        category: "canguro",
        stock: 12
    },
    {        
        id:4,
        nombre: "Hoodie con capucha blanco",
        precio: 100,
        imagen: "https://www.leatherman.com/dw/image/v2/AAMV_PRD/on/demandware.static/-/Sites-master/default/dw5aab317e/large/basics-pullover-hoodie/0030_basics-pullover-hoodie-gray-front.jpg?sw=2000&sh=2000&sm=fit&sfrm=jpg",
        category: "con",
        stock: 24
    },
    {
        id:5,
        nombre: "Hoodie sin capucha blanco",
        precio: 200,
        imagen: "https://agente-seguro.com/wp-content/uploads/2014/11/agente-seguro-buzo-friza.png",
        category: "sin",
        stock: 15
    },
    {
        id:6,
        nombre: "Hoodie canguro gris",
        precio: 300,
        imagen: "https://www.remerasya.com/pub/media/catalog/product/cache/7bef52d37f32da1d1bccc4ba3a4f24be/c/a/canguro_gris_600x600px.jpg",
        category: "canguro",
        stock: 30
    },
    {   id:7,
        nombre: "Hoodie con capucha azul",
        precio: 100,
        imagen: "https://img01.ztat.net/article/spp-media-p1/200ef2de50de3345a22d435e87119f17/fe0e96c6eabb4c51841f82342129aa1d.jpg?imwidth=1800&filter=packshot",
        category: "con",
        stock: 16
    },
    {
        id:8,
        nombre: "Hoodie negro sin capucha",
        precio: 200,
        imagen: "https://www.thisisbp.com/media/catalog/product/cache/1/image/1024x1024/602f0fa2c1f0d1ba5e241f914e856ff9/1/1/114215006_1_.jpg",
        category: "sin",
        stock: 21
    },
    {
        id:9,
        nombre: "Hoodie canguro rosa",
        precio: 300,
        imagen: "https://d26lpennugtm8s.cloudfront.net/stores/317/338/products/xq0358p-11-73969f40cdc60e0ed215630389479401-1024-1024.jpg",
        category: "canguro",
        stock: 31
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
