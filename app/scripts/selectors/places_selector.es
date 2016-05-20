export function getPlaces(state) {
    return {
        places: state.getIn(['placesReducer', 'places'])
    }
}

export function getActivePlaces(state) {
    return {
        places: state.getIn(['placesReducer', 'activePlaces'])
    }
}