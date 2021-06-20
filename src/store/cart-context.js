import React, { useState } from 'react';

const CartContext = React.createContext({
  cartIsShown: false,
  onShowCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => {
    setCartIsShown((car) => {
      return !car;
    });
  };

  return (
    <CartContext.Provider value={{ cartIsShown, onShowCart: cartShownHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
