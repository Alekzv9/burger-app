import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const { items } = useContext(CartContext);

  const numberOfItems = items.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );

  const onClickHandler = () => {
    props.onClick(true);
  };

  return (
    <button onClick={onClickHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
