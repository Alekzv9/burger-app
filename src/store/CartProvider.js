import React, { useState } from 'react';
import CartContext from './cart-context';

export const CartProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartShownHandler = () => {
    console.log('heree');
    setCartIsShown((car) => {
      return !car;
    });
  };

  const cartContext = {
    cartIsShown,
    items: [],
    totalAmount: 0,
    onShowCart: cartShownHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
