import React from 'react'

const CategoryIcon = ({ icon, size }) => (
  <img
    alt={icon.name}
    className='CategoryIcon'
    src={`${icon.prefix}${size}${icon.suffix}`}
  />
)

CategoryIcon.defaultProps = {
  size: 64
}

export default CategoryIcon
