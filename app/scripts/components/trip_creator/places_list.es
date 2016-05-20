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
                        var id = place.value,
                            lat = place.lat,
                            lng = place.lng;
                        this.pushPlace(e,id,lat,lng) }}>
                        {place.value}
                </ListGroupItem>
            );
        });
        return (
            <div className={"places_list"}>
                <b>Start:</b>
                <select id="start">
                  <option value="Halifax, NS">Halifax, NS</option>
                  <option value="Boston, MA">Boston, MA</option>
                  <option value="New York, NY">New York, NY</option>
                  <option value="Miami, FL">Miami, FL</option>
                </select>
                <ListGroup>
                    {places}
                </ListGroup>
                <b>End:</b>
                <select id="end">
                  <option value="Vancouver, BC">Vancouver, BC</option>
                  <option value="Seattle, WA">Seattle, WA</option>
                  <option value="San Francisco, CA">San Francisco, CA</option>
                  <option value="Los Angeles, CA">Los Angeles, CA</option>
                </select>
                <br/>
                  <input type="submit" id="submit"/>
            </div>
            
        ) 
    }
    pushPlace(e, id, lat, lng) {
        e.target.disable = true;
        store.dispatch({
            type: "ADD_PLACES_TO_ROUTE",
            payload: {
                value: id,
                lat: lat,
                lng: lng
            }
        })
    }
}

export default connect(getPlaces)(PlacesList)