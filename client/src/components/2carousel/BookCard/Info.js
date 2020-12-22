import React, { Component } from 'react';
import '../carouselStyle.css';
import Rate from '../../sharedComponents/Rate';
import Description from './Description';
import SeeBook from './SeeBook';

const BookInfo =(props)=> {
    const textColor = '#FFFFFF';
    return (
      <div className='Info'>
        <h1>{props.titel}</h1>
        <p className='Author'>by {props.author}</p>
        <Rate rate={props.rate} voters={props.voters} color={props.color} textColor={textColor}></Rate>
        <Description></Description>
        <SeeBook color={props.color}></SeeBook>
      </div>
    );
  }


export default BookInfo;