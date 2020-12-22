import React, { Component } from 'react';
import Best from './bestOf/Best';
import BookShelf from './bookShelf/BookShelf';

const Main = () =>{
    return (
      <div className='Main'>
        <Best></Best>
        <BookShelf></BookShelf>
      </div>
    );
  }


export default Main;