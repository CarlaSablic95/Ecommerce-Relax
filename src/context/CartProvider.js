import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialCart = JSON.parse(localStorage.getItem("cart"))
    const [cartList, setCartList] = useState(initialCart || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartList))
    }, [cartList]);

    const addItem = (item, quantity) => {
        const existingItem = cartList.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            const updatedCart = cartList.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            });
            setCartList(updatedCart);
        } else {
            setCartList(prev => [...prev, { ...item, quantity }]);
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

    const getTotalQuantity = () => {
        return cartList.reduce((acc, item) => acc + item.stock, 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem , removeItem, clear, total: getTotal(), totalQuantity: getTotalQuantity() }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

export default CartProvider;