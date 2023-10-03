import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialCart = JSON.parse(localStorage.getItem("cart"))
    const [cartList, setCartList] = useState(initialCart || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartList))
    }, [cartList]);

    const addItem = (item, quantity) => {
        const isInCart = cartList.some((cartItem) => cartItem.id === item.id)
        
        if(!isInCart) {
            setCartList(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id))
    }

    const clear = () => {
        setCartList([])
    }

    const getTotal = () => {
       return cartList.reduce((acc, item) => acc += item?.stock * item?.price, 0).toFixed(2)
    }

    return (
        <CartContext.Provider value={{ cartList, addItem , removeItem, clear, total: getTotal() }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

export default CartProvider;