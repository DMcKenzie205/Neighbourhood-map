import React, { Component } from 'react'

import { Marker } from 'google-maps-react'

import AppHeader from './components/AppHeader'
import CategorySelector from './components/CategorySelector'
import Loading from './components/Loading'
import MapCanvas from './components/MapCanvas'
import VenueDetails from './components/VenueDetails'
import VenueList from './components/VenueList'

import './styles/App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      venues: [],
      categories: [],
      activeCategory: '4d4b7104d754a06370d81259',
      activeVenue: null,
      isLoading: false,
      error: ''
    }

    // Set foursquare API fixed parameters
    this.params = {
      client_id: 'BPKLFAGF2WNVNPNFPMCNPI0JXVMPIUGHMEGPPLUYVJRSYT3W',
      client_secret: 'YJ2NF5FBA4SE44YCZZRXBNTZQNAPCCJT4T5ZLREB3KSPAQ2G',
      v: '20181122'
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleItemHover = this.handleItemHover.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)

    this.apiUrl = `https://api.foursquare.com/v2/`
  }

  componentDidMount () {
    this.fetchAllVenues(this.state.activeCategory)
  }

  // Automatically create parameter string for foursquare API call
  formatParams(params) {
    return Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join('&')
  }

  // Fetch venue list based on variable parameters
  fetchAllVenues(categoryId) {
    this.setState({ isLoading: true })
    const params = {
      ...this.params,
      categoryId,

      near: 'newcastle-upon-tyne',
      radius: 750,
      limit: 15,
    }
    // Create API Url
    const endpointUrl = `${this.apiUrl}venues/search?${this.formatParams(params)}`

    // Fetch venue data based on API Url
    fetch(endpointUrl)
      .then(response => response.json())
      .then(data => {
        const { categories } = this.state
        const { venues } = data.response
        const categoryList = {}
        venues.forEach(({ categories }) => categoryList[categories[0].id] = categories[0])

        this.setState({
          venues,

          activeCategory: categoryId,
          categories: categories.length ? categories: Object.values(categoryList),
          isLoading: false,
        })
      })
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

  handleCategoryChange(ev) {
    const { value } = ev.currentTarget

    this.fetchAllVenues(value)
  }

  handleItemClick (id, ev) {
    this.setState({ isLoading: true })
    this.fetchVenue(id)
  }

  handleItemHover (ev) {}

  render() {
    const { 
      activeCategory,
      activeVenue,
      categories,
      isLoading,
      venues,
    } = this.state

    return (
      <div className="App">
        <AppHeader />

      {/* Run Loading splash when isLoading state is true */}
        { isLoading && <Loading /> }

        <CategorySelector
          active={activeCategory}
          categories={categories}
          onChange={this.handleCategoryChange}
        />

       <VenueList venues={venues} onHover={this.handleItemHover} />

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

        { activeVenue && <VenueDetails { ...activeVenue } /> }
      </div>
    )
  }
}


export default App
