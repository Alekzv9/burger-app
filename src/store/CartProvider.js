import React, { useState, useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + (action.item.amount + action.item.price);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'REMOVE':
      return '';
    default:
      return defaultCartState;
  }
};

export const CartProvider = (props) => {
  // Maybe change this
  const [cartIsShown, setCartIsShown] = useState(false);

  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: 'REMOVE', id });
  };

  const cartShownHandler = () => {
    console.log('heree');
    setCartIsShown((car) => {
      return !car;
    });
  };

  const cartContext = {
    cartIsShown,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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