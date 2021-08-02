import React, { Component, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { render } from 'react-dom';
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faUtensils } = require('@fortawesome/free-solid-svg-icons');
import forkSvg from '../Images/utensils-solid.svg';
// let geocoder = require('geocoder');
import axios from 'axios';
import GoogleService from '../service/googleService';
/* Options for how the map should initially render. */

const GoogleMap = ({ menu, zipcode, lat, lng }) => {
  useEffect(async () => {
    const result = await GoogleService.postRestaurant(
      'http://localhost:3000/restaurant',
      { menu: menu, lat: lat, lng: lng }
    );
    console.log('this is results', result);
    console.log('this is results from restaurant array', result.restaurants);
  }, [lat]);
  // https://maps.googleapis.com/maps/api/place/textsearch/json?query=chinese&key=AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw
  // https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw

  const loader = new Loader({
    apiKey: 'AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw',
    libraries: ['places'],
  });

  const mapOptions = {
    center: {
      lat,
      lng,
    },
    zoom: 16,
  };

  // // Callback
  loader
    .load()
    .then((google) => {
      const Gmap = new google.maps.Map(
        document.getElementById('map'),
        mapOptions
      );

      let marker = new google.maps.Marker({
        position: {
          lat: 40.7128,
          lng: -74.006,
        },
        map: Gmap,
        icon: forkSvg,
      });
    })
    .catch((e) => {
      console.log('THIS DONT WORKKK', e);
    });
  return (
    <div className='google_map'>
      <div id='map'>hi</div>
    </div>
  );
};
export default GoogleMap;
