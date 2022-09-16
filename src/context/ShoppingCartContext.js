// import React, { createContext, useContext, useState } from 'react';

// export const useShoppingCart = () => {
//     return useContext(ShoppingCartContext)
// }

// const ShoppingCartContext = createContext()

// // export default ShoppingCartContext;

// export function ShoppingCartProvider({children}){

//     const [cartItems, setCartItems] = useState([]);
//     console.log(cartItems)
//     const cartQuantity = cartItems.reduce(
//         (quantity, item)=> item.quantity + quantity,
//         0
//     )

//     function getItemQuantity(id){
//         return cartItems.find(item => item.id ===id)
//     }
//     // console.log(getItemQuantity)

//     const onAdd = (id)=>{
//         const exist = cartItems.find((item)=> item.id === id);
//         if(exist){
//             const newCartItems = cartItems.map((item)=>
//             item.id === id?{...exist, quantity: exist.quantity+1} : item
//             );
//             setCartItems(newCartItems);
//         } else {
//             const newCartItems = [...cartItems]
//             setCartItems(newCartItems);

//         }
//     }


//    function increaseCartQuantity({id}){
//     setCartItems(currItems => {
//         if (currItems.find((item) => item.id === id) == null){
//             return[...currItems]
//         } else {
//             return currItems.map(item => {
//                 if (item.id ===id){
//                     return { ...item, quantity: item.quantity + 1}
//                 }else{
//                     return item
//                 }
//             })
//         }
//     })
//    }

//     const onRemove =({id})=>{
//         const exist = cartItems.find((item)=> item.id === id);
//         if (exist.quantity ===1){
//             const newCartItems = cartItems.filter((item)=>item.id !==id);
//             setCartItems(newCartItems);
//         }else{
//             const newCartItems = cartItems.map((item)=>
//             item.id ===id ? {...exist, quantity: exist.quantity - 1}:item
//             );
//             setCartItems(newCartItems);
//         }
//     }

//    function decreaseCartQuantity(id){
//     setCartItems(currItems => {
//         if (currItems.find(item => item.id === id)?.quantity === 1){
//             return currItems.filter(item => item.id !==id)
//         } else {
//             return currItems.map(item => {
//                 if (item.id ===id){
//                     return { ...item, quantity: item.quantity - 1}
//                 }else{
//                     return item
//                 }
//             })
//         }
//     })
//    }

//    function removeFromCart(id){
//     setCartItems(currItems=>{
//         return currItems.filter(item => item.id !== id)
//     })
//    }




//     return (<ShoppingCartContext.Provider value={{getItemQuantity, onAdd, cartQuantity,increaseCartQuantity, decreaseCartQuantity, onRemove, cartItems, removeFromCart}}>
//         {children}
//     </ShoppingCartContext.Provider>
//     )
// }