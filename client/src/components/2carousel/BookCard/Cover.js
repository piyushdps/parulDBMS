import React, { Component } from 'react';
import '../carouselStyle.css';

const BookCover = (props) =>{
    return (
      <div className='Cover'>
        <img src={require('../../3main/bookShelf/booksImgs/' + props.img)} />
      </div>
    );
  
}

export default BookCover;