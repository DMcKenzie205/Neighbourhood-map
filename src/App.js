import React, { Component } from 'react'

import { Marker } from 'google-maps-react'

import './styles/App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      venues: [],
      activeVenue: null,
      isLoading: true,
      error: ''
    }

    this.params = {
      client_id: 'BPKLFAGF2WNVNPNFPMCNPI0JXVMPIUGHMEGPPLUYVJRSYT3W',
      client_secret: 'YJ2NF5FBA4SE44YCZZRXBNTZQNAPCCJT4T5ZLREB3KSPAQ2G',
      v: '20181122'
    }



  render() {
      const { venues, activeVenue } = this.state
      return (
      <div className="App">
        <AppHeader />

        <MapCanvas
          lat={54.973}
          lng={-1.613}
          zoom={16}
        >
         
        </MapCanvas>

      </div>
    )
}

export default App
