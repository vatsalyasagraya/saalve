import React from 'react'
import "./cart.css"
import CartCard from './cart-cart/CartCard'



export default function Cart() {
  return (
    <div className='cart'>
      <div className="food-cart">
        <h1 >Food Cart</h1>
        <div className="cart-price">
          <a href="#">Delete all</a>
          <span class Name='cart-price'>Price</span>
        </div>
        <hr />
        <CartCard/>
        <CartCard/>
        <div className="cart-order">
          <button>Proceed to Buy</button>
          <h3 className='subtotal'>Subtotal (2 items):   $ 1,147.00</h3>
        </div>
      </div>
    </div>
  )
}
