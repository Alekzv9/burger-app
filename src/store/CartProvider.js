import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const itemIdx = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItem = state.items[itemIdx];
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[itemIdx] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
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
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: 'REMOVE', id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
