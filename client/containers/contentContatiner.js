import React, { Component, useEffect } from 'react';
import FoodOptionLists from '../components/foodOptionLists';
import GoogleMapArea from '../components/googleMapArea';

const ContentContainer = () => {
  return (
    <div className='content_container'>
      <FoodOptionLists />
      <GoogleMapArea />
    </div>
  );
};

export default ContentContainer;
