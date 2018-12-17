import React from 'react'

import '../styles/App.css'
import '../styles/Venue.css'

const CategorySelector = ({ active, categories, onChange }) => (
  <div className="CategorySelector">
    <div className="select">
      <select onChange={onChange} value={active}>
        <option key='empty' value=''>Choose a category</option>
        {
          categories.map(({ name, id }) => (
            <option key={id} value={id}>{ name }</option>
          ))
        }
      </select>
    </div>
  </div>
)

export default CategorySelector
