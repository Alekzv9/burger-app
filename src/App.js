import { useContext, useState } from 'react';
import CartContext from './store/cart-context';
import { CartProvider } from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const { cartIsShown } = useContext(CartContext);

  useState(() => {
    console.log('cart', cartIsShown);
  }, [cartIsShown]);

  return (
    <CartProvider>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
