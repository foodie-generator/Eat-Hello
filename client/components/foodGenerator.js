import React, { Component, useState } from 'react';

const FoodGenerator = ({ menu }) => {
  return (
    <div className='food_generator'>
      <div id='generator_title'>what should we eat?</div>
      <div id='generator_menu'> {menu} </div>
    </div>
  );
};

export default FoodGenerator;
