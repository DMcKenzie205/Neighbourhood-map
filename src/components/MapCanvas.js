import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import propTypes from 'prop-types'

import '../styles/App.css';

// Import props from parent
const MapCanvas = ({ google, children, lat, lng, zoom }) => {

  // Create map boundary based on ll of venues
  const bounds = new google.maps.LatLngBounds();
  children.map(child => bounds.extend({ lat: child.props.position.lat, lng: child.props.position.lng }))

  return (
    <div className='MapCanvas'>
      <Map
        className='map'
        bounds={bounds}
        google={google}
        initialCenter={{ lat, lng }}
        style={{ height: '100%', position: 'relative', width: '100%', zIndex: 1 }}
        zoom={zoom}
      >
        { children.map(child => React.cloneElement(child, {
          animation: google.maps.Animation.DROP
        })) }
      </Map>
    </div>
  )
}

MapCanvas.defaultProps = {}
MapCanvas.propTypes = {
  lat: propTypes.number.isRequired,
  lng: propTypes.number.isRequired,
  zoom: propTypes.number.isRequired
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAfjMKiM1L_kghvVB4rWQSOOQva8V6rg4I',
})(MapCanvas)