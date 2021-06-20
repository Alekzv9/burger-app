import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Chocotorta', price: 12.99, amount: 2 }].map(
        (item) => (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={() => props.onClose(false)}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>25.88</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => props.onClose(false)}
          className={classes['button--alt']}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
