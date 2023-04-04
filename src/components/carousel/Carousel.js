import React,{useRef} from 'react'
import MyCard from '../mycard/MyCard'
import './carousel.css'



export default function Carousel() {
    const pro=useRef("null");
    const prev = () =>{
        let width = pro.current.offsetWidth;
        pro.current.scrollLeft -=0.7*width;
    }
    function next() {
        let width = pro.current.offsetWidth;
        pro.current.scrollLeft +=0.7*width;        
    }

  return (
    <div className='food-carousel'>
        <button className='pre-food-btn' onClick={prev}><span className="material-icons">navigate_before</span></button>
        <div className="product-container" ref={pro}>
            <MyCard cardno='1'/>
            <MyCard cardno='2'/>
            <MyCard cardno='3'/>
            <MyCard cardno='4'/>
            <MyCard cardno='5'/>
            <MyCard cardno='6'/>
            <MyCard cardno='7'/>
            <MyCard cardno='8'/>
            <MyCard cardno='9'/>
            <MyCard cardno='10'/>
            <MyCard cardno='11'/>
            <MyCard cardno='12'/>
            <MyCard cardno='13'/>
        </div>
        <button className='next-food-btn'onClick={next}><span className="material-icons">navigate_next</span></button>

    </div>
  )
}
