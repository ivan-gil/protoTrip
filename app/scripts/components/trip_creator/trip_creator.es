import React, { Component } from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps'
import { getActivePlaces } from '../../selectors/places_selector'
import { connect } from 'react-redux'
import store from '../../../main'
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
  componentDidMount() {
    this.initMap()
  }
  initMap() {
          var self = this;
          var directionsService = new google.maps.DirectionsService;
          var directionsDisplay = new google.maps.DirectionsRenderer;
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: {lat: 41.85, lng: -87.65}
          });
          directionsDisplay.setMap(map);

          document.getElementById('submit').addEventListener('click', function() {
            self.calculateAndDisplayRoute(directionsService, directionsDisplay);
          });
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
          var waypts = [];
          var checkboxArray = this.props.places;
          for (var i = 0; i < checkboxArray.length; i++) {
            if (checkboxArray[i]) {
              waypts.push({
                location: checkboxArray[i].value,
                stopover: true
              });
            }
          }

          directionsService.route({
            origin: document.getElementById('start').value,
            destination: document.getElementById('end').value,
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING
          }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
              var route = response.routes[0];
              var summaryPanel = document.getElementById('directions-panel');
              summaryPanel.innerHTML = '';
              // For each route, display summary information.
              for (var i = 0; i < route.legs.length; i++) {
                var routeSegment = i + 1;
                summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                    '</b><br>';
                summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
                summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
              }
            } else {
              window.alert('Directions request failed due to ' + status);
            }
      })
  }

  clearPlaces() {
    store.dispatch({
      type: "CLEAR"
      })
  }

  render() {
    return (
      <div id='cont'>
      <div id="map"></div>
      <input type="submit" id="submit"/>
      <input type="submit" placeholder={"clear"} id="submit1" onClick={() => {this.clearPlaces()}}/>
      </div>
    );
  }

}

export default connect(getActivePlaces)(TripCreator)