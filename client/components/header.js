import React, { Component, useEffect, useState } from 'react';
import Popup from '../popUps/popup';
import HistoryPopup from '../popUps/historyPopup';

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const {
  faUtensils,
  faHamburger,
  faDrumstickBite,
  faPizzaSlice,
  faCat,
  faIdBadge,
  faAt,
  faPencilRuler,
  faDice,
} = require('@fortawesome/free-solid-svg-icons');

const Header = ({
  loggedIn,
  displayLoginForm,
  menu,
  username,
  loginDisplayToggler,
}) => {
  const [popupState, popupSet] = useState(0);
  const [history, setHistory] = useState(false);
  function togglePopUpHandler(destination) {
    //toggle false and 'login'
    console.log('popup ', destination);
    popupSet(() => {
      if (popupState === destination) return 0;
      return destination;
    });
  }

  function togglePopUpHandlerHistory() {
    setHistory(() => {
      if (history === true) return false;
      return true;
    });
  }

  function popUpContent() {
    return popupState ? (
      <Popup
        popupState={popupState}
        loggedIn={loggedIn}
        displayLoginForm={displayLoginForm}
        loginDisplayToggler={loginDisplayToggler}
      />
    ) : null;
  }
  return (
    <div className='header'>
      <div className='headerBar'>
        <div className='headerBar-Left'>
          {/* start of left Header Bar */}
          <div className='headMainIcon-Left'>
            <FontAwesomeIcon icon={faDice} size='3x' />
          </div>

          <div className='headName'>
            <h2>Annie App 2.0</h2>
          </div>

          <div className='headIcons-Left'>
            <FontAwesomeIcon icon={faUtensils} size='2x' />
            <FontAwesomeIcon icon={faPizzaSlice} size='2x' />
            <FontAwesomeIcon icon={faHamburger} size='2x' />
            <FontAwesomeIcon icon={faDrumstickBite} size='2x' />
          </div>
        </div>
        {/* start of header bar Right */}
        <div className='headerBar-Right'>
          <div className='headIcons-Right'>
            <div
              className='cat-Button'
              onClick={() => togglePopUpHandler('cat')}
            >
              <FontAwesomeIcon icon={faCat} size='2x' />
            </div>

            <div
              className='social-Button'
              onClick={() => togglePopUpHandlerHistory()}
            >
              <FontAwesomeIcon icon={faAt} size='2x' />
            </div>

            <div
              className='author-Button'
              onClick={() => togglePopUpHandler('author')}
            >
              <FontAwesomeIcon icon={faPencilRuler} size='2x' />
            </div>

            <div
              className='signIn-Button'
              onClick={() => togglePopUpHandler('signIn')}
            >
              <FontAwesomeIcon icon={faIdBadge} size='2x' />
            </div>
          </div>
          {/* Drop Down Menu */}
          {popUpContent()}
          {history && <HistoryPopup menu={menu} username={username} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
