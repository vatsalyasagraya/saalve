import React from 'react'
import image1 from "./2.jpg"
import "./cartcard.css"
function CartCard() {
  return (
    <>
    <div className="cart-card">
      <img src={image1}alt="" />
      <div className='card-text'>
        <div className="card-heading">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h3>$129</h3>
        </div>
        <div className="cart-more-text">
            <span>In Stock</span><br />
            <span>Lorem, ipsum dolor.</span>
        </div>
        <div className="cart-qty">
          <select name="Qty: ">
            <option value="" disabled selected>Qty</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <hr />
          <a href="#">Delete</a>
          <hr />
          <a href="#">Like</a>
          <hr />
          <a href="#">Share</a>
        </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default CartCard
