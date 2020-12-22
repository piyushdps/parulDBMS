import React, { Component } from 'react';
import '../carouselStyle.css';
import Cover from './Cover';
import Info from './Info';


const BookCard  = (props) =>{
    return (
      <div className='BookCard' style={props.style}>
        <Cover img={props.bookInfo.image}></Cover>
        <Info titel={props.bookInfo.name} author={props.bookInfo.author} 
          rate={props.bookInfo.rate} color={props.dark} voters={props.bookInfo.voters}></Info>
      </div>
    );
  
}

export default BookCard;