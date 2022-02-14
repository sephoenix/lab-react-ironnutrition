import React from 'react';
import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import NewFoodInput from './components/NewFoodInput';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';
import foodsDataJson from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsDataJson);
  const [todaysFood, setTodaysFood] = useState();

  const addNewFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const onFilter = (input) => {
    setFoods(foods.filter((food) => food.name.includes(input)));
    if (input === '') {
      setFoods(foodsDataJson);
    }
  };

  const onAdd = (todayFood) => {
    setTodaysFood(...todayFood);
    console.log(todayFood);
  };

  return (
    <div className="App">
      <SearchBar onFilter={onFilter} />
      <NewFoodInput addFood={addNewFood} />
      <div className="food">
        {foods.map((food, i) => (
          <FoodBox
            key={i}
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
          />
        ))}
      </div>
      <div>
        {foods.map((todaysFood, i) => (
          <TodaysFood
            key={i}
            name={todaysFood.name}
            calories={todaysFood.calories}
            image={todaysFood.image}
            quantity={todaysFood.quantity}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
