import React, { Component, useEffect, useState } from 'react';

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faCat } = require('@fortawesome/free-solid-svg-icons');

const Footer = () => {
  
  return (
    <div className='footerBar'>

      
      <div className='footerFlex'>
        {/* FOOTER ONE */}
        <div className='designDetails'>
          
          <p>
            <FontAwesomeIcon icon={faCat} size='1x' /> 
            Designed and build by the <br></br> New York #27 goblin shark team
          </p>
          <br></br>
          <p>
          Code licensed MIT, docs CC BY 3.0.
          </p>
          <br></br>
          <p>
            Currently v0.1.3
          </p>
        </div>
        {/* FOOTER TWO */}
        <div className='detailsFlex'>

          <div className='col1'>
            
            <ul>
              <li><strong>CodeSmith</strong></li>
              <li>New York</li>
              <li>Immersive 27</li>
              <li>Goblin Shark</li>
            </ul>
          </div>
          <div className='col2'>
            <ul>
            <li><strong>Tech</strong></li>
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Node</li>
            </ul>
          </div>
          <div className='col3'>
            <ul>
            <li><strong>Resources</strong></li>
              <li>Fort Awesome</li>
              <li>Babel</li>
              <li>axios</li>
              <li>nodemon</li>
              <li>cors</li>
              <li>bcrypt</li>
              <li>mongoose</li>
            </ul> 
          </div>
          <div className='col4'>
            <ul>
            <li><strong>APIs</strong></li>
              <li>Google Maps</li>
            </ul>
          </div>
        </div>
      
      </div>

    </div>
  );
};

export default Footer;
