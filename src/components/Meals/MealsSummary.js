import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      Delicious food
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        provident esse dignissimos vitae sunt voluptatibus laudantium maxime,
        eos nostrum repudiandae, voluptatem similique cumque doloremque libero
        dolorum praesentium, voluptas omnis quia!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        consequatur, obcaecati culpa enim deleniti eos necessitatibus
        perspiciatis ipsum voluptatibus velit possimus in explicabo dolorum
        dolore magni perferendis quae omnis vel!
      </p>
    </section>
  );
};

export default MealsSummary;
