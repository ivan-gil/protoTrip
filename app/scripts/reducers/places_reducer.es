import ActionTypes from '../actions/places_actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({
    places: [
        {
            value: "paris, france"
        },
        {
            value: "Brest Region, Belarus"
        },
        {
            value: "Minsk, Minskaja voblasć"
        },
        {
            value: "Vitebsk, Vitebsk Region"
        },
        {
            value: "Mogilev Province, Belarus"
        },
        {
            value: "Grodno Region, Belarus"
        },
        {
            value: "Gomel, Homiel Province"
        },
        {
            value: "Vilnius, Vilniaus apskritis"
        },
        {
            value: "Warszawa, Polska"
        },
        {
            value: "Amsterdam, Nederland"
        }

    ],
    activePlaces: []
     
});

export function placesReducer(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.ADD_PLACES_TO_ROUTE:
            return state = state.update('activePlaces', activePlaces => activePlaces.concat(action.payload));
        case "CLEAR":
            return state = state.update('activePlaces', activePlaces => []);
        default:
            return state;
    }
}