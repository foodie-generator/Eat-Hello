import React, { Component, useEffect } from 'react';
import FoodOptionLists from '../components/foodOptionLists';
import GoogleMapArea from '../components/googleMapArea';

const ContentContainer = ({ setMenu }) => {
  return (
    <div className='content_container'>
      <FoodOptionLists setMenu={setMenu} />
      <GoogleMapArea />
    </div>
  );
};

export default ContentContainer;
