import { PromiseProvider } from 'mongoose';
import React, { Component, Fragment, useEffect } from 'react';
import goblinShark from '../Images/goboshark.png';

const Popup = (props) => {

  const logInContent = ()=>{
    //is user logged in 
    if(props.loggedIn){
      return(
        <Fragment>
          <h2>
            Welcome Back
          </h2>
        </Fragment>
      );
    }//else not logged in

    if(props.displayLoginForm){
      return(
        <Fragment>
          <div className="card">
            <h2>Credentials</h2>
            <label className="input">
              <input className="input__field" type="text" placeholder=" " />
              <span className="input__label">User Name</span>
            </label>
            <div className="button-group">
              <button>Send</button>
              <button type="reset">Reset</button>
            </div>
          </div>
        </Fragment>
      )
    }

    return(
      <div className='logInButtonContainer' >
        <button className='submit signUpButton' >
          Sign up
        </button>
        <button className='submit logInButton' >
          Log In
        </button>
      </div>
    );
  };

  const catContent = ()=>{
    return(
      <Fragment>
        <img src={goblinShark} alt="goblin-shark" />
      </Fragment>
    );
  };

  const content = ()=>{
    //these could be done without strings to controll content state
    if(props.display === 'signIn') return logInContent();
    if(props.display === 'cat') return catContent();
    //else
    return <h1 > {props.display} </h1>;
  };
  return (
    <div className="popUp">
      <div className="popUpBody">
        {content()}
      </div>
    </div>
  );
}

export default Popup;