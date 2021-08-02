import { PromiseProvider } from 'mongoose';
import React, { useState, Component, Fragment, useEffect } from 'react';
import axios from 'axios';

const HistoryPopup = ({ menu, username }) => {
  const [data, setData] = useState([]);
  
  // fetch request to database to get user history using username
  useEffect(async () => {
    try {
      const result = await axios.get('/api/foodHistory', username); 
      console.log('result: ', result);
      console.log('result.payload.history: ', result.payload.history);
      setData(result.payload.history);
    } catch (err) {
      console.log('err: ', err);
    }
  }, []);
  // render the user history array
  // on menu state change update user food history in the database

  return (
    <div className='history_popUp'>
      <div className='history_popUpBody'>{data}</div>
    </div>
  );
};

export default HistoryPopup;
