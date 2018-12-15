import React from 'react'

import '../styles/Venue.css'

const VenueDetails = ({ bestPhoto, description, name }) => (
  <div className='VenueDetails'>
    <div className='media'>
      <div className='media-left'>
        { bestPhoto.prefix && <img src={`${bestPhoto.prefix}width300${bestPhoto.suffix}`} alt={name} /> }
      </div>
      <div className='media-body'>
        <h1 className='subtitle'>{name}</h1>

        <p>{description}</p>
      </div>
    </div>
  </div>
)

VenueDetails.defaultProps = {
  bestPhoto: {}
}

export default VenueDetails
