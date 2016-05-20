import ActionTypes from '../actions/places_actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({
    places: [
        {
            lat: 53.902116,
            lng: 27.549175,
            value: "Montreal, QBC"
        },
        {
            lat: 53.897816,
            lng: 27.553175,
            value: "Toronto, ONT"
        },
        {
            lat: 53.892116,
            lng: 27.557175,
            value: "Chicago"
        },
        {
            lat: 53.880116,
            lng: 27.535175,
            value: "Winnipeg"
        },
        {
            lat: 53.883116,
            lng: 27.505175,
            value: "Fargo"
        },
        {
            lat: 53.875116,
            lng: 27.570175,
            value: "Calgary"
        }

    ],
    activePlaces: []
     
});

export function placesReducer(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.ADD_PLACES_TO_ROUTE:
            return state = state.update('activePlaces', activePlaces => activePlaces.concat(action.payload));
        default:
            return state;
    }
}