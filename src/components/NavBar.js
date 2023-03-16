import React,{useState} from 'react';
import './navbar.css';


function NavBar() {
  const [active,setActive] = useState({meal: false, grocery: false, bakery: false, partner: false});
  const [toggle,setToggle] = useState(true);
  
  
    return (
      <nav className="nav">
        <ul className="nav-list">
            <li><a href="/" className="nav-logo">logo</a></li>
            <li className="nav-toggle">
              <button  
                onClick={() => setToggle(!toggle)}>
                <span className="material-icons">{toggle?"menu":"close"}</span>
                  </button></li>
            <div className={toggle? "nav-menu visible":"nav-menu" }>
              <li className="buttons">
                <a href='#' 
                  onClick={() => {setActive(prev => {return {meal: true, grocery: false, bakery: false, partner: false}});setToggle(!toggle)}}
                  className={active.meal? "active": "" }>Meal</a>
              </li>
              <li className="buttons">
                <a href="#" 
                  onClick={() => {setActive(prev => {return {meal: false, grocery: true, bakery: false, partner: false}});setToggle(!toggle)}} 
                  className={active.grocery? "active": "" }>Grocery</a>
              </li>
              <li className="buttons">
                <a href="#" 
                  onClick={() => {setActive(prev => {return {meal: false, grocery: false, bakery: true, partner: false}});setToggle(!toggle)}} 
                  className={active.bakery? "active": "" }>Bakery</a>
              </li>
              <li className="buttons">
                <a href="#" 
                  onClick={() => {setActive(prev => {return {meal: false, grocery: false, bakery: false, partner: true}});setToggle(!toggle)}} 
                  className={active.partner? "active": "" }>Partner with us</a>
              </li>
            </div>
            <div className="nav-icons">
              <li className="nav-icon">
                <a href='#' ><span className="material-icons">favorite</span></a>
              </li>
              <li className="nav-icon">
                <a href="#" ><span className="material-icons">notifications</span></a>
              </li>
              <li className="nav-icon">
                <a href="#" ><span className="material-icons">shopping_cart</span></a>
              </li>
              <li className="nav-icon">
                <a href="#" ><span className="material-icons">face</span></a>
              </li>
            </div>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;