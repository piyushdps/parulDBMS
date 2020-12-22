import React, { useState, useEffect, useMemo } from 'react';
import './bookStyle.css';
import BookCover from './BookCover';
import BookInfo from './BookInfo';
import Likes from './Likes';
import {FaHeartO, FaHeart} from 'react-icons/lib/fa';
const Book = (props) => {
	const [liked , setLiked] = useState(false)
  
  const isLiked = () => {
	setLiked( !liked)
	}

  
    let like = null;
  useMemo(() => {
    if (liked) {
      like = <FaHeart className='icon' onClick={()=>{isLiked()}}></FaHeart>
    } else {
      like = <FaHeartO className='icon' onClick={()=>{isLiked()}}></FaHeartO>
    }
  }, [])
  
    return (
      <div className='Book'>
        <BookCover img={props.img}></BookCover>
        <BookInfo name={props.name} author={props.author}
        rate={props.rate} voters={props.voters}></BookInfo>
        {like}
        <Likes people={props.people}></Likes>
      </div>
    );
  }


export default Book;