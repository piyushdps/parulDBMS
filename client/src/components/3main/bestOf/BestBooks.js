import React, { Component } from 'react';
import '../main.css';

const BestBooks = (props)=> {
    let bestBooks = [];
  

bestBooks = props.bestBooks?.map((o,i)=><li key={i}>
<div className='BookPhoto'>
  <img src={require('../bookShelf/booksImgs/' + o.image)} />
</div>
<span>{o.name}</span>
</li>)


    
    return (
      <div className='BestBooks'>
        <div className='Titel'>
          <span>Books of the year</span>
        </div>
        <ul>
          {bestBooks}
        </ul>
      </div>
    );
  }

export default BestBooks;