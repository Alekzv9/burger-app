import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() !== '';
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const street = nameRef.current.value;
    const postal = nameRef.current.value;
    const city = nameRef.current.value;

    const nameIsValid = isEmpty(name);
    const streetIsValid = isEmpty(street);
    const postalIsValid = isFiveChar(postal);
    const cityIsValid = isEmpty(city);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClass = `${classes.control} ${
    formValidity.name ? '' : classes.invalid
  }`;
  const streetControlClass = `${classes.control} ${
    formValidity.street ? '' : classes.invalid
  }`;
  const postalControlClass = `${classes.control} ${
    formValidity.postal ? '' : classes.invalid
  }`;
  const cityControlClass = `${classes.control} ${
    formValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' />
        {!formValidity.name && <p>Please enter a name</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor='street'>Street</label>
        <input ref={streetRef} type='text' id='street' />
        {!formValidity.street && <p>Please enter a street</p>}
      </div>
      <div className={postalControlClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalRef} type='text' id='postal' />
        {!formValidity.postal && <p>Postal must be 5 characters long</p>}
      </div>
      <div className={cityControlClass}>
        <label htmlFor='city'>City</label>
        <input ref={cityRef} type='text' id='city' />
        {!formValidity.city && <p>Please enter a city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
