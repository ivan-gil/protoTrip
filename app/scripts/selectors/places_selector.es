export function getPlaces(state) {
    return {
        places: state.getIn(['placesReducer', 'places'])
    }
}