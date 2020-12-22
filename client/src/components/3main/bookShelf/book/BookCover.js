import React, { Component } from 'react';
import './bookStyle.css';

const BookCover = (props)=> {
    return (
      <div className='BookCover'>
        <img src={require('../booksImgs/'+props.img)} />
      </div>
    );
  
}

export default BookCover;