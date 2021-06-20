import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const { items } = useContext(CartContext);
  const [btnIsHightlighted, setBtnIsHightlighted] = useState(false);

  const numberOfItems = items.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHightlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (!items.length) {
      return;
    }
    setBtnIsHightlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHightlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const onClickHandler = () => {
    props.onClick(true);
  };

  return (
    <button onClick={onClickHandler} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
