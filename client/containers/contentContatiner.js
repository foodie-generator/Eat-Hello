import React, { Component, useEffect } from 'react';
import FoodOptionLists from '../components/foodOptionLists';
import GoogleMapArea from '../components/googleMapArea';

const ContentContainer = ({ menu, setMenu }) => {
  return (
    <div className='content_container'>
      <FoodOptionLists setMenu={setMenu} />
      <GoogleMapArea menu={menu} />
    </div>
  );
};

export default ContentContainer;
