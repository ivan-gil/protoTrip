import { authReducer } from './auth_reducer'
import { placesReducer } from './places_reducer'
import _ from 'lodash'
import Immutable from 'immutable'

const reducers = {
    authReducer: authReducer,
    placesReducer: placesReducer
};

export default function appReducer(state = Immutable.Map(), action) {
    const newState = _.reduce(reducers, (currentState, reducer, key) => {
        return currentState.update(key, (stateChunk) => reducer(stateChunk, action, state));
    }, state);
    return newState;
}