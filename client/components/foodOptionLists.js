import React, { Component, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import FoodOption from './foodOption';

const foodOptions = [
  'Pizza',
  'Dimsum',
  'Burgers',
  'Pasta',
  'BBQ',
  'Sushi',
  'Mexican',
  'Seafood',
  'Thai',
];

const FoodListMaker = (foodOptions) => {
  return foodOptions.map((food, idx) => {
    return <FoodOption key={idx} id={idx} name={food} />;
  });
};

const FoodOptionLists = ({ setMenu }) => {
  const [clickAdd, setClickAdd] = useState('');
  const [optionArr, setOptionArr] = useState(foodOptions);
  const input = document.querySelector('.add_menu');

  console.log(clickAdd);
  const addMenuBtn = () => {
    if (clickAdd !== '') {
      const copyArr = [...optionArr];
      copyArr.push(clickAdd);
      setOptionArr(copyArr);
      setClickAdd('');
      input.value = '';
      input.focus();
    }
  };

  const showMenu = () => {
    const copyArr = [...optionArr];
    const getMenu = Math.floor(Math.random() * copyArr.length);
    const ourMenu = copyArr[getMenu];
    setMenu(ourMenu);
  };

  return (
    <div className='food_option_box'>
      <ul className='food_option_lists'>{FoodListMaker(optionArr)}</ul>
      <div className='food_input_btns'>
        <input
          className='add_menu'
          type='text'
          placeholder='add options'
          onChange={(e) => setClickAdd(e.target.value)}
        />
        <button className='add_menuBtn' onClick={() => addMenuBtn()}>
          Add Option
        </button>
        <button className='show_menuBtn' onClick={() => showMenu()}>
          Show me the menu!!
        </button>
      </div>
    </div>
  );
};

export default FoodOptionLists;
