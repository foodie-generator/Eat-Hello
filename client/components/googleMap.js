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
  const [restaurant, setRestaurant] = useState('');
  const [restaurantLat, setRestaurantLat] = useState(40.7285229);
  const [restaurantLng, setRestaurantLng] = useState(-73.9880155);
  const [address, setAddress] = useState('');

  useEffect(async () => {
    const result = await GoogleService.postRestaurant(
      'http://localhost:3000/restaurant',
      { menu: menu, lat: lat, lng: lng }
    );
    console.log('this is results', result);
    // let item = inputContainer[Math.floor(Math.random()*inputContainer.length)];
    let chosenRestaurant = result[Math.floor(Math.random() * result.length)];
    // console.log('this is chosen restaurant', chosenRestaurant);
    setRestaurantLat(chosenRestaurant.geometry.location.lat);
    setRestaurantLng(chosenRestaurant.geometry.location.lng);
    setRestaurant(chosenRestaurant.name);
    setAddress(chosenRestaurant.formatted_address);
  }, [lat]);

  const loader = new Loader({
    apiKey: 'AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw',
    libraries: ['places'],
  });

  const mapOptions = {
    center: {
      lat: restaurantLat,
      lng: restaurantLng,
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
      const infowindow = new google.maps.InfoWindow({
        content: `<strong>Come eat here!! @ </strong> ${restaurant},   <strong> Address: </strong> ${address} `,
      });
      let marker = new google.maps.Marker({
        //myLatlng,
        position: {
          lat: restaurantLat,
          lng: restaurantLng,
        },
        Gmap,
        icon: forkSvg,
      });
      marker.addListener('click', () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
      marker.setMap(Gmap);
      console.log(
        'this is marker location',
        marker.position.lat,
        marker.position.lng
      );
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
