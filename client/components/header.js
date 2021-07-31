import React, { Component, useEffect } from 'react';
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faUtensils, faHamburger, faDrumstickBite,faPizzaSlice, faCat, faIdBadge, faAt, faPencilRuler, faDice } = require('@fortawesome/free-solid-svg-icons');

const Header = () => {
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
            <FontAwesomeIcon icon={faCat} size="2x"/>
            <FontAwesomeIcon icon={faAt} size="2x"/>
            <FontAwesomeIcon icon={faPencilRuler} size="2x"/>
            <FontAwesomeIcon icon={faIdBadge} size="2x"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
