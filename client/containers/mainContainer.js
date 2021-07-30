import React, { Component, useEffect } from 'react';
import Header from '../components/header';
import ContentContainer from './contentContatiner';
import FoodGenerator from '../components/foodGenerator';

const MainContainer = () => {
  return (
    <div className='main_container'>
      <Header />
      <div className='main'>
        <FoodGenerator />
        <ContentContainer />
      </div>
    </div>
  );
};

export default MainContainer;
