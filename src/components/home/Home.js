import React,{useRef} from 'react'
import "./home.css"
import ic1 from "../images/ic1.jpg"
import ic2 from "../images/ic2.jpg"
import ic3 from "../images/ic3.png"


function Home() {
    const pro=useRef("null");
    const prev = () =>{
        let width = pro.current.offsetWidth;
        pro.current.scrollLeft -=width;
    }
    function next() {
        let width = pro.current.offsetWidth;
        pro.current.scrollLeft +=width;        
    }
    return (
        <div className='home-caraousel'>
            <button className='pre-btn' onClick={prev}><span className="material-icons">navigate_before</span></button>
            <div className="home-container" ref={pro}>
                <img src={ic3} alt="rice" />
                <img src={ic2} alt="paneer" />
                <img src={ic1} alt="dosa" />
            </div>
            <button className='next-btn'onClick={next}><span className="material-icons">navigate_next</span></button>
        </div>
    )
}

export default Home;
