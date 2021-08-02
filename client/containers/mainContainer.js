import React, { Component, useEffect, useState } from 'react';
import Header from '../components/header';
import ContentContainer from './contentContatiner';
import FoodGenerator from '../components/foodGenerator';
import FoodPicker from '../components/foodpicker';
import Footer from '../components/footer';

const MainContainer = () => {
  const [menu, setMenu] = useState('');
  const [zipcode, setZipcode] = useState(0);

  return (
    <div className='main_container'>
      <Header />
      <div className='main'>
        <FoodGenerator menu={menu} />
        <FoodPicker
          setMenu={setMenu}
          menu={menu}
          setZipcode={setZipcode}
          zipcode={zipcode}
        />
        <ContentContainer menu={menu} />
        <Footer />

      </div>
    </div>
  );
};

export default MainContainer;
