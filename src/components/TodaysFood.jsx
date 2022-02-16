import React from 'react';

function TodaysFood(todayFood) {

  return (
    <div>
      <img src={todayFood.image} alt="imagen" />
      <p>{todayFood.name}</p>
      <p>{todayFood.calories}</p>
      <p>{todayFood.quantity}</p>

    </div>
  );
}

export default TodaysFood;
