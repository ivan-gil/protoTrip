import ActionTypes from '../actions/sign_actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({
    places: [
        {
            nameCode: "montreal, quebec",
            value: "Montreal, QBC"
        },
        {
            nameCode: "toronto, ont",
            value: "Toronto, ONT"
        },
        {
            nameCode: "chicago, il",
            value: "Chicago"
        },
        {
            nameCode: "winnipeg, mb",
            value: "Winnipeg"
        },
        {
            nameCode: "fargo, nd",
            value: "Fargo"
        },
        {
            nameCode: "calgary, ab",
            value: "Calgary"
        },
        {
            nameCode: "spokane, wa",
            value: "Spokane"
        }

    ],
    activePlaces: []
     
});

export function placesReducer(state = initialState, action) {
            return state;
}