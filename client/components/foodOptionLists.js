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
      <input className='add_menu' type='text' placeholder='add options' />
      <button className='add_menuBtn'>Add Option</button>
    </div>
  );
};

export default FoodOptionLists;
