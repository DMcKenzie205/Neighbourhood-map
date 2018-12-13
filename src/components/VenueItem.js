import React from 'react'
import propTypes from 'prop-types'

import CategoryIcon from './CategoryIcon'

const VenueItem = ({ id, categories, name, onClick }) => (
  <li key={id}>
    <button onClick={onClick}>
      <CategoryIcon {...categories[0]} />
      {name}
    </button>
  </li>
)

VenueItem.defaultProps = {}
VenueItem.propTypes = {
  name: propTypes.string.isRequired,
  onHover: propTypes.func
}

export default VenueItem
