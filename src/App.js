import { Fragment, useContext, useState } from 'react';
import CartContext from './store/cart-context';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const { cartIsShown } = useContext(CartContext);

  useState(() => {
    console.log('cart', cartIsShown);
  }, [cartIsShown]);

  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
