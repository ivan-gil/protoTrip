import ActionTypes from '../actions/places_actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({
    places: [
        {
            value: "montreal, quebec"
        },
        {
            value: "toronto, ont"
        },
        {
            value: "chicago, il"
        },
        {
            value: "winnipeg, mb"
        },
        {
            value: "fargo, nd"
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