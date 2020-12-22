import React, { Component } from 'react';
import jsonReader from 'json-loader';
import '../main.css';
import Book from './book/Book';
import bookInfo from '../../../books.json';

const Books = (props)=> {
    let bookCards = [];
    for (let i=0; i<props.books.length; i++) {
      bookCards.push();
    }

    bookCards = props.books?.map((o,i)=><Book key={i} name={o.name} img={o.image} 
    author={o.author} rate={o.rate} 
    voters={o.voters} people={o.people}></Book>)
    return (
      <div className='Books'>
        {bookCards}
      </div>
    );
  }

export default Books;