const productos = [
    {
        id: 1,
        title: 'Aros',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/aros.jpg'
    },

    {
        id: 2,
        title: 'Blusa',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/blusa.png'
    },

    {
        id: 3,
        title: 'Blusa blanca',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/blusa-blanca.png'
    },

    {
        id: 4,
        title: 'Blusa negra',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/blusa-negra.png'
    },

    {
        id: 5,
        title: 'Bolso',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/bolso.jpg'
    },

    {
        id: 6,
        title: 'Bolso blanco crudo',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/bolso-blanco-crudo.jpg'
    },

    {
        id: 7,
        title: 'Botines',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/botines.jpg'
    },

    {
        id: 8,
        title: 'Campera jean',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/campera-jean.webp'
    },

    {
        id: 9,
        title: 'Falda blanca',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/falda-blanca.jpg'
    },

    {
        id: 10,
        title: 'Gorro',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/gorro.jpg'
    },

    {
        id: 11,
        title: 'Jean azul claro',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/jean-azul-claro.jpg'
    },

    {
        id: 12,
        title: 'Jean negro',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/jean-negro.jpg'
    },

    {
        id: 13,
        title: 'Lentes de sol',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/lentes-de-sol.jpg'
    },

    {
        id: 14,
        title: 'Minifalda negra',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/minifalda-negra.jpg'
    },

    {
        id: 15,
        title: 'Mochila beige',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/mochila-beige.jpg'
    },

    {
        id: 16,
        title: 'Musculosa',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/musculosa.webp'
    },

    {
        id: 17,
        title: 'Pañuelo',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/panuelo.webp'
    },

    {
        id: 18,
        title: 'Pulsera corazón',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/pulsera-corazon.jpg'
    },

    {
        id: 19,
        title: 'Sandalias beige',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/sandalias-beige.jpg'
    },

    {
        id: 20,
        title: 'Zapatillas',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'../img/productos/zapatillas.jpg'
    },
]

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const obtenerProductoId = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find((producto) => producto.id === productoId))
        }, 2000)
    })
}