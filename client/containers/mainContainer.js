import React, { Component, useEffect, useState } from 'react';
import Header from '../components/header';
import ContentContainer from './contentContatiner';
import FoodGenerator from '../components/foodGenerator';

const MainContainer = () => {
  const [menu, setMenu] = useState('Hmm... any idea? 🤔');

  return (
    <div className='main_container'>
      <Header />
      <div className='main'>
        <FoodGenerator menu={menu} />
        <ContentContainer setMenu={setMenu} menu={menu} />
      </div>
    </div>
  );
};

export default MainContainer;
