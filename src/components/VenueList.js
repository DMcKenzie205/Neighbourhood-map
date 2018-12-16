import React, { Component } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import VenueItem from './VenueItem'

import '../styles/Venue.css'

class VenueList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true
    }

    this.handleVisibilityClick = this.handleVisibilityClick.bind(this)
  }

  handleVisibilityClick(ev) {
    ev.currentTarget.blur()
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const {venues, onVenueClick, onHover } = this.props
    const { isOpen } = this.state
  
    return (
      <div className={classnames('menu VenueList', { 'is-open': isOpen })}>
        <button className="burger" onClick={this.handleVisibilityClick}>
          <i className="fas fa-lg fa-bars" />
        </button>
        <p className="menu-label">Venues</p>
        <div className="VenueList__inner">
          <ul className='menu-list'>
            { venues.map(venue => (
              <VenueItem
                key={venue.id}
                onClick={(ev) => onVenueClick(venue.id, ev)}
                onHover={onHover}
                {...venue}
              />)
            ) }
          </ul>
        </div>
      </div>
    )
  } 
}

VenueList.defaultProps = {
  venues: []
}
VenueList.propTypes = {
  onClick: propTypes.func,
  venues: propTypes.array.isRequired
}

export default VenueList
