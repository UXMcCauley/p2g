import React, { createContext, useState } from "react";

const Cart = createContext({
  addToCart: () => {},
  cart: []
});

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const addToCart = (arr) => {
    setCart([ ...cart, arr ])
  }
  const removeFromCart = (val) => {
    let array = [...cart]
    if(val !== -1) {
      array.splice(val, 1)
      setCart(array)
    }
  }
  return (
    <Cart.Provider value={{ cart, setCart, addToCart, removeFromCart }}>{ children }</Cart.Provider>
  )
}

export { Cart, CartProvider };
