import React, { Component, useEffect } from 'react';

const FoodOption = ({ name, id }) => {
  return <li className='food_option'> • {name}</li>;
};

export default FoodOption;
