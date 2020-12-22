import React, { Component } from 'react';
import './sharedComponentsStyle.css';
import {MdStarOutline, MdStarHalf, MdStar} from 'react-icons/lib/md'

const Rate = (props) =>{
   
    let fullStar = parseInt(props.rate, 10);
    let halfStar = 0;
    let emptyStar = 0;
    if ((parseFloat(props.rate) - fullStar) >= 0.3 && (parseFloat(props.rate) - fullStar) <= 0.8) {
      halfStar = 1;
    } else if ((parseFloat(props.rate) - fullStar) > 0.8) {
      fullStar += 1;
    }
    emptyStar = 5 - fullStar - halfStar;
    
    let stars = [];
    
    let index = 0;
    for (let i = 0; i < fullStar; i++, index++) {
      stars.push(<MdStar key={index}></MdStar>);
    }
    for (let i = 0; i < halfStar; i++, index++) {
      stars.push(<MdStarHalf key={index}></MdStarHalf>);
    }
    for (let i = 0; i < emptyStar; i++, index++) {
      stars.push(<MdStarOutline key={index}></MdStarOutline>);
    }
    
    return (
      <div className='Rate' style={props.color}>
        {stars}
        <span style={{color: props.textColor}}>{props.voters} voters</span>
      </div>
    );
  
}

export default Rate;