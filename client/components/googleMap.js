import React, { Component, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { render } from 'react-dom';
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faUtensils } = require('@fortawesome/free-solid-svg-icons');
import forkSvg from '../Images/utensils-solid.svg';
// let geocoder = require('geocoder');
import axios from 'axios';
import GoogleService from '../service/googleService.js';
/* Options for how the map should initially render. */

const GoogleMap = ({ menu, zipcode }) => {
  // geocoder.geocode(11220), (err,data) =>{
  //   console.log(data)
  // }

  useEffect(async () => {
    const result = await GoogleService.getGoogleMap(
      'http://localhost:3000/map'
    );
    console.log('this is results from googleMapAxios', result);
  }, []);


  console.log('this is menu', menu);
  console.log('this is zipcode', zipcode)
  // axios('/annie',{
  //   //fetch to endpoint
  //   method: 'GET',
  //   headers:{
  //     'Content-Type': 'application/json; charset=UTF-8'
  //   }
  //   ///body: JSON.stringify('https://maps.googleapis.com/maps/api/place/textsearch/json?query=chinese&key=AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw')
  // })
  // .then(response => response.json())
  // .then((data) => console.log(data));
  console.log('hello is this working')

  const loader = new Loader({
    apiKey: 'AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw',
    libraries: ['places'],
  });

  const mapOptions = {
    center: {
      lat: 40.7128,
      lng: -74.006,
    },
    zoom: 11,
  };

  // // Callback
  loader
    .load()
    .then((google) => {
      const Gmap = new google.maps.Map(
        document.getElementById('map'),
        mapOptions
      );
      console.log('we made it here');

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
  console.log('pre loaderCallback');

  return (
    <div className='google_map'>
      <div id='map'>hi</div>
    </div>
  );
};
export default GoogleMap;
