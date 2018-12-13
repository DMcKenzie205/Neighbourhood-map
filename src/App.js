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

    this.apiUrl = `https://api.foursquare.com/v2/`
  }

  componentDidMount () {
    this.fetchAllVenues()
  }

  formatParams(params) {
    return Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join('&')
  }

  fetchAllVenues() {
    const params = {
      ...this.params,
      near: 'newcastle-upon-tyne',
      radius: 750,
      limit: 50,
      categories: '4d4b7104d754a06370d81259'
    }
    const endpointUrl = `${this.apiUrl}venues/search?${this.formatParams(params)}`

    fetch(endpointUrl)
      .then(response => response.json())
      .then(data =>
        this.setState({
          venues: data.response.venues,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
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
