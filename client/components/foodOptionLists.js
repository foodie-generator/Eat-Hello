import React, { Component, useEffect } from 'react';
import FoodOption from './foodOption';

const FoodOptionLists = () => {
  return (
    <div className='food_option_box'>
      <ul className='food_option_lists'>
        <FoodOption />
        <FoodOption />
        <FoodOption />
        <FoodOption />
        <FoodOption />
      </ul>
      <input type='text' placeholder='add options' />
      <button>Add Option</button>
    </div>
  );
};

export default FoodOptionLists;
