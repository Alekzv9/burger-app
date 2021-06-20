import { CartProvider } from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { useState } from 'react';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (show) => {
    setCartIsShown(show);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
