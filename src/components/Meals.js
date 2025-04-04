import React, {useEffect, useState} from "react"

const Meals = () => {
    const [meals, setMeals]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/meals')
            .then((res)=> res.json())
            .then((data)=>{
                console.log("andmed serverist:", data);
                setMeals(data);
            })
            .catch((error)=>{
                console.error('viga mealide toomisel;',error);
            });
    },[]);

return (
    <ul id="meals">
      <h2>create a list of meals</h2>
      
    </ul>
  );
};

export default Meals