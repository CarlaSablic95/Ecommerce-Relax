const products = [
    {
        id: 1,
        title: 'Aros',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'aros.png',
        category: 'mujer'
    },

    {
        id: 2,
        title: 'Blusa rayada',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'blusa.png',
        category: 'mujer'
    },

    {
        id: 3,
        title: 'Blusa blanca',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'blusa-blanca.png',
        category: 'mujer'
    },

    {
        id: 4,
        title: 'Blusa negra',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'blusa-negra.png',
        category: 'mujer'
    },

    {
        id: 5,
        title: 'Botas negras',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'botas.png',
        category: 'hombre'
    },
    
    {
        id: 6,
        title: 'Botas',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'botas-hombre.png',
        category: 'hombre'
    },
    
    {
        id: 7,
        title: 'Botines',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'botines.png',
        category: 'mujer'
    },
    
    {
        id: 8,
        title: 'Buzo azul estampado',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'buzo-azul.png',
        category: 'hombre'
    },
    
    {
        id: 9,
        title: 'Buzo blanco',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'buzo-blanco.png',
        category: 'hombre'
    },
    
    {
        id: 10,
        title: 'Buzo azul Fila',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'buzo-fila.png',
        category: 'hombre'
    },
    
    {
        id: 11,
        title: 'Camisa verde a cuadros',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'camisa-cuadros.png',
        category: 'hombre'
    },
    
    {
        id: 12,
        title: 'Camisa roja a cuadros',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'camisa-cuadros-roja.png',
        category: 'hombre'
    },
    
    {
        id: 13,
        title: 'Campera jean',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'campera-jean.png',
        category: 'mujer'
    },
    
    {
        id: 14,
        title: 'Chaqueta negra',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'chaqueta-negra.png',
        category: 'hombre'
    },
    
    {
        id: 15,
        title: 'Falda larga blanca',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'falda-blanca.png',
        category: 'mujer'
    },
    
    {
        id: 16,
        title: 'Gorra Aston Martin',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'gorra-aston.png',
        category: 'hombre'
    },
    
    {
        id: 17,
        title: 'Gorra Puma',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'gorra-puma.png',
        category: 'hombre'
    },
    
    {
        id: 18,
        title: 'Gorro',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'gorro.png',
        category: 'mujer'
    },
    
    {
        id: 19,
        title: 'Jean azul claro',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'jean-azul-claro.png',
        category: 'mujer'
    },
    
    {
        id: 20,
        title: 'Jean negro con roturas',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'jean-negro.png',
        category: 'mujer'
    },
    
    {
        id: 21,
        title: 'Jean negro',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'jean-negro-hombre.png',
        category: 'hombre'
    },
    
    {
        id: 22,
        title: 'Lentes de sol',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'lentes-de-sol.png',
        category: 'hombre'
    },
    
    {
        id: 23,
        title: 'Lentes negros',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'lentes-negros.png',
        category: 'hombre'
    },
    
    {
        id: 24,
        title: 'Minifalda negra',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'minifalda-negra.png',
        category: 'mujer'
    },
    
    {
        id: 25,
        title: 'Musculosa',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'musculosa.png',
        category: 'mujer'
    },
    
    {
        id: 26,
        title: 'Pantalón beige',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'pantalon-beige.png',
        category: 'hombre'
    },
    
    {
        id: 27,
        title: 'Pañuelo negro',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'panuelo.png',
        category: 'mujer'
    },
    
    {
        id: 28,
        title: 'Pulsera corazón',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'pulsera-corazon.png',
        category: 'mujer'
    },
    
    {
        id: 29,
        title: 'Remera negra estampada',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'remera-estampa.png',
        category: 'hombre'
    },
    
    {
        id: 30,
        title: 'Sandalias beige',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'sandalias-beige.png',
        category: 'mujer'
    },
    
    {
        id: 31,
        title: 'Zapatillas verde',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'zapatillas.png',
        category: 'mujer'
    },
    
    {
        id: 32,
        title: 'Zapatillas Puma',
        description: 'Lorem ipsum',
        price: 2000,
        pictureUrl:'zapatillas-puma.png',
        category: 'hombre'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === id))
        }, 2000)
    })
}

export const getProductsCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === productCategory))
        }, 2000)
    })
}