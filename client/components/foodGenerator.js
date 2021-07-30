import React, { Component, useEffect } from 'react';

const FoodGenerator = () => {
  return (
    <div className='food_generator'>
      <div>what should we eat?</div>
      <input type='text' placeholder='what is your food today?' />
    </div>
  );
};

export default FoodGenerator;
