import React from 'react';
import { useState } from 'react';

function FoodBox(foods) {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleClick = (e) => {
    const todayFood = { ...foods, quantity };
    foods.onAdd(todayFood);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={foods.image} alt="imagen"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{foods.name}</strong> <br />
              <small>{foods.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                min={1}
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleClick}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
