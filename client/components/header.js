import React, { Component, useEffect, useState } from 'react';
import Popup from '../popUps/popup';

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faUtensils, faHamburger, faDrumstickBite,faPizzaSlice, faCat, faIdBadge, faAt, faPencilRuler, faDice } = require('@fortawesome/free-solid-svg-icons');

const Header = () => {

  const [popupState, popupSet] = useState(0);
  function togglePopUpHandler(destination){  //toggle false and 'login'
    console.log('popup ', destination)
    popupSet(()=>{
      if(popupState !== 0) return 0;
      return destination
    })
  }
  function popUpContent(){
    return popupState ? <Popup display={popupState} /> : null
  }
  return (
    <div className='header'>
      <div className="headerBar" >
        <div className="headerBar-Left">
          {/* start of left Header Bar */}
          <div className="headMainIcon-Left">
            <FontAwesomeIcon icon={faDice} size="3x"/>
          </div>

          <div className="headName">
            <h2>Annie App 2.0</h2>
          </div>

          <div className="headIcons-Left">
            <FontAwesomeIcon icon={faUtensils} size="2x"/>
            <FontAwesomeIcon icon={faPizzaSlice} size="2x"/>
            <FontAwesomeIcon icon={faHamburger} size="2x"/>
            <FontAwesomeIcon icon={faDrumstickBite} size="2x"/>
          </div>
        </div>
        {/* start of header bar Right */}
        <div className="headerBar-Right">
          <div className="headIcons-Right">

            <div className="cat-Button" onClick={()=>togglePopUpHandler('cat')}>
              <FontAwesomeIcon icon={faCat} size="2x"/>
            </div>
            
            <div className="social-Button" onClick={()=>togglePopUpHandler('social')}>
              <FontAwesomeIcon icon={faAt} size="2x"/>
            </div>

            <div className="author-Button" onClick={()=>togglePopUpHandler('author')}>
              <FontAwesomeIcon icon={faPencilRuler} size="2x"/>
            </div>
            
            <div className="signIn-Button" onClick={()=>togglePopUpHandler('signIn')}>
              <FontAwesomeIcon icon={faIdBadge} size="2x"/>
            </div>
          </div>
          {/* Drop Down Menu */}
          {popUpContent()}
        </div>
      </div>
    </div>
  );
};

export default Header;
