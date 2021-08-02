import { PromiseProvider } from 'mongoose';
import React, { Component, Fragment, useEffect } from 'react';
import axios from 'axios';

const HistoryPopup = ({ menu, username }) => {
  // fetch request to database to get user history using username
  const foodHistory = async (username) => {
    try {
      await axios.get('/api/foodHistory', username);
    } catch (err) {
      console.log('err: ', err);
    }
    // render the user history array
    // on menu state change update user food history in the database

    return (
      <div className='history_popUp'>
        <div className='history_popUpBody'>{foodHistory}</div>
      </div>
    );
  };
};

export default HistoryPopup;
