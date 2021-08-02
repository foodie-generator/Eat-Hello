import { PromiseProvider } from 'mongoose';
import React, { Component, Fragment, useEffect } from 'react';
import goblinShark from '../Images/goboshark.png';

const Popup = ({
  popupState,
  loggedIn,
  displayLoginForm,
  loginDisplayToggler,
}) => {
  const logInContent = () => {
    //is user logged in
    if (loggedIn) {
      return (
        <Fragment>
          <h2>Welcome Back</h2>
        </Fragment>
      );
    } //else not logged in

    if (displayLoginForm) {
      return (
        <Fragment>
          <div className='credContainer'>
            <h2>Credentials</h2>
            <label className='input'>
              <input className='input__field' type='text' placeholder=' ' />
              <span className='input__label'>User Name</span>
            </label>
            <label className='input'>
              <input className='input__field' type='text' placeholder=' ' />
              <span className='input__label'>Password</span>
            </label>
            <div className='button-group'>
              <button className='submit'>Send</button>
              <button type='reset' className='submit'>
                Reset
              </button>
            </div>
          </div>
        </Fragment>
      );
    }

    return (
      <div className='logInButtonContainer'>
        <button
          className='submit signUpButton'
          onClick={() => loginDisplayToggler()}
        >
          Sign up
        </button>
        <button className='submit logInButton'>Log In</button>
      </div>
    );
  };

  const catContent = () => {
    return (
      <Fragment>
        <img src={goblinShark} alt='goblin-shark' />
      </Fragment>
    );
  };

  const authorContent = () => {
    return (
      <ul className='authors'>
        <li>Adda Kridler</li>
        <li>Annie Pan</li>
        <li>Emeric David</li>
        <li>Hazel Na</li>
        <li>Matilda Wang</li>
      </ul>
    );
  };

  const content = () => {
    //these could be done without strings to controll content state
    if (popupState === 'signIn') return logInContent();
    if (popupState === 'cat') return catContent();
    if (popupState === 'author') return authorContent();
    //else
    return <h1> {popupState} </h1>;
  };
  return (
    <div className='popUp'>
      <div className='popUpBody'>{content()}</div>
    </div>
  );
};

export default Popup;
