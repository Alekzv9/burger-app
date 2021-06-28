import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState('');

  const asyncHandler = async (asyncFn, params) => {
    try {
      const { data } = await asyncFn(...params);
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  };

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);
    const [fetchedMeals, error] = await asyncHandler(axios.get, [
      'https://react-my-burger-19906.firebaseio.com/meals.json',
    ]);
    if (error) {
      setHttpError(error.message);
    } else {
      const mealsArray = [];
      for (const key in fetchedMeals) {
        const { name, description, price } = fetchedMeals[key];
        mealsArray.push({
          id: key,
          name,
          description,
          price,
        });
      }
      setMeals(mealsArray);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  if (isLoading) {
    return (
      <section className={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes['meals-error']}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
