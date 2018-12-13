import React, { Component } from 'react'

import { Marker } from 'google-maps-react'

import AppHeader from './components/AppHeader'
import Loading from './components/Loading'
import MapCanvas from './components/MapCanvas'

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

    // Set foursquare API fixed parameters
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

  // Automatically create parameter string for foursquare API call
  formatParams(params) {
    return Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join('&')
  }

  // Fetch venue list based on variable parameters
  fetchAllVenues() {
    const params = {
      ...this.params,
      near: 'newcastle-upon-tyne',
      radius: 750,
      limit: 10,
      categories: '4d4b7104d754a06370d81259'
    }
    // Create API Url
    const endpointUrl = `${this.apiUrl}venues/search?${this.formatParams(params)}`

    // Fetch venue data based on API Url
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

  // Fetch id of each venue
  fetchVenue(id) {
    const endpointUrl = `${this.apiUrl}venues/${id}?${this.formatParams(this.params)}`

    fetch(endpointUrl)
      .then(response => response.json())
      .then(data => this.setState({ activeVenue: data.response.venue, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }


  render() {
    const { venues, activeVenue } = this.state
    return (
      <div className="App">
        <AppHeader />

      {/* Run Loading code when isLoading state is true */}
        { this.state.isLoading && <Loading /> }

        <MapCanvas
          lat={54.973}
          lng={-1.613}
          zoom={16}
        >
          { venues.map(venue => (
            <Marker
              key={venue.id}
              onClick={ev => this.handleItemClick(venue.id, ev)}
              position={{
                lat: venue.location.lat,
                lng: venue.location.lng
              }}
              title={venue.name}
            />
          )) }
        </MapCanvas>

      </div>
    )
  }
}


export default App
