import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +inputRef.current.value;
    if (!enteredAmount || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount 1 - 5</p>}
    </form>
  );
};

export default MealItemForm;
