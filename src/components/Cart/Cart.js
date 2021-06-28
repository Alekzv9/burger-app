import React, { useContext, useState } from 'react';
import Checkout from './Checkout';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = !!cartCtx.items.length;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const confirmHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      'https://react-my-burger-19906.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    console.log(response);
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    // bind() pre configures a function for future usage.
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          {...item}
          key={item.id}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button
        onClick={() => props.onClose(false)}
        className={classes['button--alt']}
      >
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={confirmHandler}
          onCancel={() => props.onClose(false)}
        />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingContent = <p>Sending order data...</p>;
  const didSubmitContent = (
    <React.Fragment>
      <p>Succefully sent the order</p>
      <div className={classes.actions}>
        <button onClick={() => props.onClose(false)} className={classes.button}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={() => props.onClose(false)}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
