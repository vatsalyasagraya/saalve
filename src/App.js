import React from "react";
import NavBar from "./components/navbar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Meal from "./components/meal/Meal";
import Bakery from "./components/bakery/Bakery";
import Grocery from "./components/grocery/Grocery";
import Partner from "./components/partner/Partner";
import Favorite from "./components/favorite/Favorite";
import Cart from "./components/cart/Cart";
import Account from "./components/account/Account";
import FoodComp from "./components/foodcomp/FoodComp";
import Carousel from "./components/carousel/Carousel";
import LoggIn from "./components/login/loggin";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile"
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsletter/NewsLetter";


function App() {
  return (
    <>
    <Router>
      <NavBar/>
        {/* <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes> */}
        {/* <Carousel/>  */}
   

        {/* <Routes>
            <Route exact path="/grocery" element={<Grocery/>}/>
            <Route exact path="/meal" element={<Meal/>}/>
            <Route exact path="/bakery" element={<Bakery/>}/>
            <Route exact path="/partnerwithus" element={<Partner/>}/>
            <Route exact path="/favorite" element={<Favorite/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/account" element={<Account/>}/>
        </Routes>
        <FoodComp/> */}
        
      </Router> 
        
      
      {/* <LoggIn/>  */}
       <Profile/>
      {/* <FoodComp/>  */}

      <Footer/> 


    </>
  );
}

export default App;
