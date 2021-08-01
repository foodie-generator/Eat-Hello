import React, { Component, useState } from 'react';
import Popup from '../popUps/popup';
import ZipCode from './zipcode';
import FoodOptionLists from './foodOptionLists';

const FoodPicker = ({ setMenu, menu, setZipcode, zipcode }) => {
  const [optionClick, setOptionClick] = useState(false);

  return (
    <div className='food_picker'>
      <div className='food_picker_container'>
        <div>Hmm... any idea? 🤔</div>
        <button
          className='food_picker_btn'
          onClick={() => setOptionClick(true)}
        >
          Let me help you
        </button>
        {optionClick && (
          <FoodOptionLists
            setMenu={setMenu}
            cancelPopup={() => setOptionClick(false)}
          />
        )}
        {menu && (
          <ZipCode setZipcode={setZipcode} zipcode={zipcode} menu={menu} />
        )}
      </div>
    </div>
  );
};

export default FoodPicker;
