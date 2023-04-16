import React from 'react'
import Carousel from '../carousel/Carousel'
import Search from '../search/Search'
import MyCard from '../mycard/MyCard'

export default function Meal() {
  return (
    <>
      <Search/>
      <h2 className='meal-heading'>Surprise Bakery in Jaipur</h2>
      <div className="meal">
        <div className='meal-grid'>
          <MyCard cardno='1'/>
          <MyCard cardno='2'/>
          <MyCard cardno='3'/>
          <MyCard cardno='4'/>
          <MyCard cardno='5'/>
          <MyCard cardno='6'/>
          <MyCard cardno='7'/>
          <MyCard cardno='8'/>
        </div>
      </div>
      <h2 className='meal-heading'>Recommended Surprise Grocery Bags</h2>
      <Carousel/>
      <h2 className='meal-heading'>Recommended Surprise Meals</h2>
      <Carousel/>
    </>
  )
}
