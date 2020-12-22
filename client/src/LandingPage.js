import React from 'react';
import './App.css';
import Header from './components/1header/Header';
import Carousel from './components/2carousel/Carousel';
import Main from './components/3main/Main';

const LandingPage =()=> {

    return (
      <div>
        <Header/>
        <Carousel/>
        <Main/>
      </div>
    );
  }


export default LandingPage;
