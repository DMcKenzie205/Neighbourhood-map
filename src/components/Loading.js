import React from 'react'
import propTypes from 'prop-types'

import '../styles/Loading.css'

const Loading = ({ singular }) => (
  <div className='Loading'>
    <div className='Loading__canvas'>
      <div className='Loading__inner'>
        <div className="Loading__icon">
          <i className='fas fa-6x fa-landmark' />
        </div>
        <span className="Loading__spinner">
          <i className='fas fa-spin fa-sync' />
        </span>
        Loading Venue{ singular ? '' : 's' }...
      </div>
    </div>
  </div>
)

Loading.defaultProps = {
  singular: false
}
Loading.propTypes = {
  singular: propTypes.bool
}

export default Loading
