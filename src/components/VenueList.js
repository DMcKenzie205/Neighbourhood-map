import React from 'react'
import propTypes from 'prop-types'

import VenueItem from './VenueItem'

import '../styles/Venue.css'

const VenueList = ({ venues, onClick, onHover }) => {
  return (
    <div className='menu VenueList'>
      <p className="menu-label">Venues</p>
      <div className="VenueList__inner">
        <ul className='menu-list'>
          { venues.map(venue => (
            <VenueItem
              key={venue.id}
              onClick={(ev) => onClick(venue.id, ev)}
              onHover={onHover}
              {...venue}
            />)
          ) }
        </ul>
      </div>
    </div>
  )
}

VenueList.defaultProps = {
  venues: []
}
VenueList.propTypes = {
  onClick: propTypes.func,
  venues: propTypes.array.isRequired
}

export default VenueList
