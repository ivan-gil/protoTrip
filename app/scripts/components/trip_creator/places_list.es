import React, { Component } from 'react'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { getPlaces } from '../../selectors/places_selector'
import { connect } from 'react-redux'
import Actions from '../../actions/places_actions'
import './style.css'
import store from '../../../main'



class PlacesList extends Component {
    render() {
        const places = this.props.places.map((place, index) => {
            return (
                <ListGroupItem
                    id={place.value}
                    lat={place.lat}
                    lng={place.lng}
                    key={index} onClick={(e) => { 
                        var id = place.value;
                        this.pushPlace(e,id) }}>
                        {place.value}
                </ListGroupItem>
            );
        });
        return (
            <div className={"places_list"}>
                <b>Start:</b>
                <b>End:</b>
                <select id="end">
                <option value="Brest Region, Belarus">brest</option>
                <option value="paris, france">paris</option>
                <option value="Minsk, Minskaja voblasć">minsk</option>
                  <option value="Vitebsk, Vitebsk Region">vitebsk</option>
                  <option value="Mogilev Province, Belarus">mogilev</option>
                  <option value="Grodno Region, Belarus">grodno</option>
                  <option value="Vilnius, Vilniaus apskritis">vilnius</option>
                  <option value="Warszawa, Polska">warszawa</option>
                  <option value="Tallinna linn, Eesti">tallinna</option>
                  <option value="Amsterdam, Nederland">grodno</option>
                </select>
                <select id="end">
                <option value="Brest Region, Belarus">brest</option>
                <option value="paris, france">paris</option>
                <option value="Minsk, Minskaja voblasć">minsk</option>
                  <option value="Vitebsk, Vitebsk Region">vitebsk</option>
                  <option value="Mogilev Province, Belarus">mogilev</option>
                  <option value="Grodno Region, Belarus">grodno</option>
                  <option value="Vilnius, Vilniaus apskritis">vilnius</option>
                  <option value="Warszawa, Polska">warszawa</option>
                  <option value="Tallinna linn, Eesti">tallinna</option>
                  <option value="Amsterdam, Nederland">grodno</option>
                </select>
                <ListGroup>
                    {places}
                </ListGroup>
                
            </div>
            
        ) 
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
    pushPlace(e, id, lat, lng) {
        e.target.disable = true;
        store.dispatch({
            type: "ADD_PLACES_TO_ROUTE",
            payload: {
                value: id,
            }
        })
    }
}

export default connect(getPlaces)(PlacesList)