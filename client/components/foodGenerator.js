import React, { Component, useState } from 'react';

const FoodGenerator = () => {
  const [menu, setMenu] = useState('Hmm... any idea? 🤔');

  return (
    <div className='food_generator'>
      <div id='generator_title'>what should we eat?</div>
      <div id='generator_menu'> {menu} </div>
    </div>
  );
};

export default FoodGenerator;
