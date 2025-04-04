import React, {useEffect, useState} from "react"
import MealItem from './MealItem'

const Meals = () => {
    const [meals, setMeals] =useState([]);

useEffect(()=>{
    const fetchMeals = async () =>{
        try{
            const response = await fetch('http://localhost:3001/meals');
            const data = await response.json();
            console.log(data);
            setMeals(data);
        } catch (error) {
            console.error('error fetching meals', error);
        }
    };
    fetchMeals();
}, []);        

return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals