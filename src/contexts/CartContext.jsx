import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (count, product) => {
    console.log(`Agregaste ${count} ${product.title}`);
    const newItem = {
      item: product,
      quantity: count,
    };
    setCartArray([...cartArray, newItem]);
  };

  console.log(cartArray);

  const value = {
    cartArray,
    addToCart,
    setCartArray,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
