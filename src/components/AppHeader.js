import React from 'react'

import '../styles/AppHeader.css'

const AppHeader = props => (
  <header className='AppHeader'>
    <i className="fas fa-lg fa-city" />
    <h1 className="title AppHeader__title">DoonToon</h1>
  </header>
)

AppHeader.defaultProps = {}

export default AppHeader
