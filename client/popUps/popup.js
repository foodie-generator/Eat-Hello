import React, { Component, useEffect } from 'react';


const Popup = (props) => {
  return (
    <div className="popUp">
      <div className="popUpBody">
        <h1 > {props.display} </h1>
      </div>
    </div>
  );
}

export default Popup;