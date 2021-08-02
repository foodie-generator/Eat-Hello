import React, { Component, useEffect, useState } from 'react';
import Header from '../components/header';
import FoodGenerator from '../components/foodGenerator';
import FoodPicker from '../components/foodpicker';
import Footer from '../components/footer';

const MainContainer = () => {
  const [menu, setMenu] = useState('');
  const [zipcode, setZipcode] = useState(0);

  //sent menu url to the server

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
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
