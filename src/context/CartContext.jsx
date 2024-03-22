import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    let stock = isInCart(product.id);

    if (stock) {
      let newList = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, stock: product.stock };
        } else {
          return element;
        }
      });

      setCart(newList);
      localStorage.setItem("cart", JSON.stringify(newList));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const isInCart = (id) => {
    let stock = cart.some((element) => element.id === id);
    return stock;
  };

  const removeById = (id) => {
    let cartUpdate = cart.filter((element) => element.id !== id);
    setCart(cartUpdate);
    localStorage.setItem("cart", JSON.stringify(cartUpdate));
  };

  const getTotalItems = () => {
    let total = cart.filter((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.stock * parseFloat(element.price);
    }, 0);

    return total;
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);

    if (product) {
      return product.stock;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalPrice,
    getTotalQuantityById,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
