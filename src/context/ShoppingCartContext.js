import React, { Children, createContext, useContext, useState } from 'react';

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

const ShoppingCartContext = createContext({})

export default ShoppingCartContext;

export function ShoppingCartProvider({}){
    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(id){
        return cartItems.find(item => item.id===id?.quantity || 0)
    }





    return <ShoppingCartContext.Provider value={{getItemQuantity}}>
        {Children}
    </ShoppingCartContext.Provider>
}