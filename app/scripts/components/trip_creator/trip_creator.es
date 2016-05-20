import React, { Component } from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps'
import { getActivePlaces } from '../../selectors/places_selector'
import { connect } from 'react-redux'
import './style.css'

const coords = {
  lat: 53.885775,
  lng: 27.549549
};

class TripCreator extends Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    const places = this.props.places.map((place, index) => {
            return (
                <Marker
                    lat={place.lat}
                    lng={place.lng}
                    draggable={false}
                    key={index}>
                        {place.nameCode}
                </Marker>
            );
    });
    return (
      <Gmaps className={"trip-creator"}
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
       {places}
      </Gmaps>
    );
  }

}

export default connect(getActivePlaces)(TripCreator)