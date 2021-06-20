import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const { onShowCart } = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Chocotorta', price: 12.99, amount: 2 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>25.88</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onShowCart} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
