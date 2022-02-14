import React from "react";

function TodaysFood(todaysFood) {
    return(
        <div>
            <h1>Today's Food</h1>
            <img src={todaysFood.image} />
            <p>{todaysFood.name}</p>
            <p>{todaysFood.calories}</p>
            <p>{todaysFood.quantity}</p>
        </div>
    )
}

export default TodaysFood;