import React from 'react';

const CartContext = React.createContext({
  cartIsShown: false,
  onShowCart: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
