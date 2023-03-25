import React, { useState } from 'react'
import './mycard.css'
import img1 from '../images/1.jpg'

export default function MyCard(props) {
  const[like,setLike] = useState(false)
  const[fav,setFav] = useState("favorite_border")
  function handleLike(){
    if(!like)
      setFav("favorite");
    else
      setFav("favorite_border");
    setLike(!like);
  }

  return (
    <div className='mycard'>
      <img src={img1} alt="no" />
      <div  className={fav} ><span onClick={handleLike} className="material-icons">{fav}</span></div>
      Card no. {props.cardno}
    </div>
    )
}
