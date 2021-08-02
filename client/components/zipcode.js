import React, { Component, useState } from 'react';
import GoogleMapArea from '../components/googleMapArea';

const ZipCode = ({ menu, setZipcode, zipcode }) => {
  const [click, setClick] = useState(false);

  const SetZipCode = (num) => {
    setZipcode(num);
  };

  const checkZipcode = () => {
    const input = document.querySelector('.add_zipcode');
    const num = Number(zipcode);
    if (zipcode.length === 5 && typeof num === 'number') {
      setClick(true);
      input.value = '';
      input.focus();
    } else {
      alert('The Zipcode should be 5 digits NUMBER!');
    }
  };

  return (
    <div className='zipcode_container'>
      <p>
        {' '}
        Let's eat <b>{menu}</b>
      </p>
      <p>Let me find you a restaurant.</p>
      <p>What is your Zipcode?</p>
      <div className='zipcode_input_Btn'>
        <input
          className='add_zipcode'
          type='text'
          placeholder='zipcode'
          onChange={(e) => SetZipCode(e.target.value)}
        />
        <button className='zipcode_btn' onClick={() => checkZipcode()}>
          Click
        </button>
        {click && (
          <GoogleMapArea
            menu={menu}
            zipcode={zipcode}
            setClick={() => setClick(false)}
          />
        )}

        {/*  */}
      </div>
    </div>
  );
};

export default ZipCode;
