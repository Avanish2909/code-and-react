import React, { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext(null);

export const Cart = (props) => {
    const [items, setItems] = useState([]);
    return (
        <>
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
        </>
    );
};

export default Cart;