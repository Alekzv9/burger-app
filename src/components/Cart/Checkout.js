import React from 'react';

const Checkout = (props) => {
  const submitHandler = (evt) => {
    evt.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='control'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div className='control'>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
      </div>
      <div className='control'>
        <label htmlFor='postal'>Postal</label>
        <input type='text' id='postal' />
      </div>
      <div className='control'>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
      </div>
      <button type='button' onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
