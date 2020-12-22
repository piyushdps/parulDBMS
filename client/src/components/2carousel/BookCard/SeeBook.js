import React, { Component } from 'react';
import '../carouselStyle.css';

const SeeBook = (props)=> {
    return (
      <div className='SeeBook' style={props.color}>
        <button style={props.color}>See Book</button>
      </div>
    );
  }


export default SeeBook;