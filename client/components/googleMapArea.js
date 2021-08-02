import React, { Component, useEffect } from 'react';
import GoogleMap from './googleMap';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const GoogleMapArea = ({ menu, zipcode, setClick, lat, lng }) => {
  return (
    <div className='google'>
      <div className='google_map_area'>
        {/* // <Wrapper apiKey = 'AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw' > */}
        <GoogleMap menu={menu} zipcode={zipcode} lat={lat} lng={lng} />
        {/* // </Wrapper> */}
      </div>
      <button className='map_btn' onClick={setClick}>
        Close
      </button>
    </div>
  );
};

export default GoogleMapArea;
