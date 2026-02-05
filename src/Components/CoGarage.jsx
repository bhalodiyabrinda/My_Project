import React from 'react';
import Component from './Component';   // IMPORTANT

function Garage() {
  return (
    <>
      <p>who lives in my Garage?</p>
      <Component color="red" />

      {/* Rendering a Component Twice */}
      <Component color="pink" />
    </>
  )
}

export default Garage;
