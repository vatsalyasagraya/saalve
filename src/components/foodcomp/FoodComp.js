import React from 'react';
import { useState } from 'react';
import './foodcomp.css';
import img1 from '../images/3.jpg'
import Search from '../search/Search';
import Carousel from '../carousel/Carousel';

function FoodComp() {
    const[like,setLike] = useState(false);
    const[fav,setFav] = useState("favorite_border")
    function handleLike(){
    if(!like)
      setFav("favorite");
    else
      setFav("favorite_border");
    setLike(!like);
  }
    return (
        <>
            <Search/>
            <div className="food-page">
                    <div className="leftsec">
                        <div className="top-section">
                            <h2>Restaurant Name</h2>
                            <div  className={fav} ><span onClick={handleLike} className="material-icons">{fav}</span></div>
                        </div>
                        <div className="stars top-section-headings">
                            North Indian, Fast Food
                            <div className="star"><span className='span0'>4.2</span><span className='material-icons'>star</span></div>
                        </div>
                        <div className="distances top-section-headings">
                            Malaviya Nagar, Jaipur
                            <div className="star"><span className='distance span0'>13km</span><span className='material-icons'>directions_car</span></div>
                        </div>
                        <span style={{color:"orange" ,fontSize:"0.8rem"}}> Closes in 30 mins</span>
                        <hr style={{marginTop: "10px", marginBottom: "10px" }}/>
                        <div className="top-section">
                            <h3>Surprise Thali</h3>
                            <div className="price"><span className='span0'>&#x20B9; 150<del style={{marginLeft:"4px"}}>&#x20B9;300</del></span><span className='material-icons'>payments</span></div>
                        </div> 
                        <div className="pickup-time">
                            <div className="pickup"><span className='material-icons'>schedule</span><span className='span1'>9:00 p.m.</span></div>
                            <div className="pickup"><span className='material-icons'>event_available</span><span className='span1'>12/05/23</span></div>
                            <div  className={fav} ><span onClick={handleLike} className="material-icons">{fav}</span></div>
                        </div>  
                        <div className="order">
                            <button> Order Now</button>
                            <button> Add to Cart</button>
                        </div>
                        <hr style={{marginTop: "10px", marginBottom: "10px" }}/>                        
                    </div>
                    <div className="rightsec">
                        <img src={img1} alt="Not found"/>
                    </div>
            </div>
            <h2 className='meal-heading'>Recommended Surprise Grocery Bags</h2>
            <Carousel/>
            <h2 className='meal-heading'>Recommended Surprise Bakery Bags</h2>
            <Carousel/>
        </>
    )
}

export default FoodComp;