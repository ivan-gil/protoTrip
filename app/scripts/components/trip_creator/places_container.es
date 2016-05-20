import React, { Component } from 'react'
import PlacesList from './places_list'
import TripCreator from './trip_creator'

class PlacesContainer extends Component {
    render() {
        return (
            <div>
                <TripCreator/>
                <PlacesList/>
            </div>
            )
    }
}

export default PlacesContainer