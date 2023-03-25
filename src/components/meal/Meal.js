import React from 'react'

export default function Meal() {
  return (
    <div>
      <div className='meal-header'>
        <div>
          <select name="location">
            <option value="" disabled selected hidden>Jaipur</option>
            <option value="">Delhi</option>
            <option value="">Mumbai</option>
          </select>
          <input type="text" name='write' placeholder="Search by restaurant or store"/>
          <select name="filter">
            <option value="" disabled selected>Filter</option>
            <option value="">Veg</option>
            <option value="">Thali</option>
            <option value="">Sweets</option>
          </select>
          <button>Search</button>
        </div>
        <div>
          <label><input type="checkbox" />Pure Veg</label>
          <label><input type="checkbox" />Pure Vegan</label>
          <label><input type="checkbox" />Now Open</label>
        </div>
      </div>

    </div>
  )
}
