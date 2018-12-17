# Neighbourhood Map Project

This application is a Neighbourhood Maps app for the area of Newcastle-upon-Tyne, UK that allows you to find interesting venues within the City to check out. Selecting a location via its Marker will give extra information about the venue.

A list of all the venues available and a drop-down menu to sort via venue category is also provided.

For this map project, I built a react-based dynamic web application. The venue data is provided via the foursquare Api.

## Installation

```$ git clone https://github.com/DMcKenzie205/Neighbourhood-map```

1. In this folder carry out the following commands to prepare the app:

* install all project dependencies with `npm install`
* start the development server with `npm start`

2. With your server running, visit the site: ```http://localhost:3000```

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── package-lock.json # DO NOT MODIFY
├── LICENSE # MIT licence covering use of the app
├── .gitignore # DO NOT MODIFY
├── yarn.lock # Auto-generated file # DO NOT MODIFY
└──public
│   ├── manifest.json # App Details. No need to do anything with this file.
│   ├── index.html # DO NOT MODIFY
│   ├── map-marker-alt-solid-active.svg # Image file for selected venue marker.
│   └── map-marker-alt-solid.svg # Image file for all non-selected venue markers.
└── src
    ├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── App.js # Main React Component file for the App. # Venue search parameters can be modified on lines 61-63.
    ├── logo.svg # React logo file.
    ├── index.js # Used for DOM rendering only. # DO NOT MODIFY
    └── components
    │   ├── AppHeader.js # Component for the Header. # DO NOT MODIFY
    │   ├── CategoryIcon.js # Component for displaying icons within the Venue List. # DO NOT MODIFY
    │   ├── CategorySelector.js # Component for filtering Venue displayed by category # DO NOT MODIFY
    │   ├── Loading.js # Component for loading splash screen. # DO NOT MODIFY
    │   ├── MapCanvas.js # Component for google map canvas. # DO NOT MODIFY
    │   ├── VenueDetails.js # Component for Venue InfoWindow. # DO NOT MODIFY
    │   ├── VenueItem.js # Component for displaying each venue within VenueList. # DO NOT MODIFY
    │   └── VenueList.js # Component for list of venues. # DO NOT MODIFY
    └── styles
        ├── App.css # css for MapCanvas, loading splash screen and Category Selector.
        ├── AppHeader.css # css for App Header.
        ├── index.css # background css.
        └── Venue.css # css for venues and VenueList.

```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
