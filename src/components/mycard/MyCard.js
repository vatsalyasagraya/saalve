import React, { useState } from 'react'
import './mycard.css'
import img1 from '../images/3.jpg'
import { Link } from 'react-router-dom'

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
      <Link to='/food-component'><img src={img1} alt="no" /></Link>
      <div className="card-top">
        <div className="card-top1">
            <h4>Restaurant Name</h4>
            <div  className={fav} ><span onClick={handleLike} className="material-icons">{fav}</span></div>
        </div>
        <div className="card-top2">
            <div style={{paddingTop:"6px"}}>North Indian, Fast Food</div>
            <div className="star"><span className='span0'>4.2</span><span className='material-icons'>star</span></div>
        </div>
        <div className="card-top3">
            <div className="pickup"><span className='material-icons'>schedule</span><span className='span1'>9:00 p.m.</span></div>
            <div className="star"><span className='distance span0'>13km</span><span className='material-icons'>directions_car</span></div>
        </div>
        <div className="card-top4">
          <div className="pickup"><span className='material-icons'>event_available</span><span className='span1'>12/05/23</span></div>
          <div className="price"><span className='span0'>&#x20B9; 150<del style={{marginLeft:"4px"}}>&#x20B9;300</del></span><span className='material-icons'>payments</span></div>
        </div> 
      </div>
    </div>
    )
}
