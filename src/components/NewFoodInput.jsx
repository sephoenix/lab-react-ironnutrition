import { useState } from 'react';
import React from 'react';

function NewFoodInput(foods) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };
  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image };
    foods.addFood(newFood);
    console.log(newFood);
  };

  return (
    <div>
      <h1>Add food</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleNameInput}
        />
        <input
          type="text"
          value={calories}
          placeholder="Calories"
          onChange={handleCaloriesInput}
        />
        {
          <input
            type="text"
            value={image}
            placeholder="Image"
            onChange={handleImageInput}
          />
        }
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewFoodInput;
