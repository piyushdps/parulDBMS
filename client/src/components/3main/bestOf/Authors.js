import React, { Component } from 'react';
import '../main.css';

const Authors = (props)=>{
    let bestAuthors = [];
    
    
bestAuthors = props.bestAuthors?.map((o,i)=>  <li key={i}>
<div className='AuthorPhoto'>
  <img src={require('./authors/' + i + '.png')} />
</div>
<span>{o}</span>
</li>)


    
    return (
      <div className='Authors'>
        <div className='Titel'>
          <span>Authors of the week</span>
        </div>
        <ul>
          {bestAuthors}
        </ul>
      </div>
    );
  
}

export default Authors;