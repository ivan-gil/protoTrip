import ActionTypes from '../actions/sign_actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({
    username: '',
    password: '',
     authorized: false
});

export function authReducer(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.REG_USER_SUCCESS:
            state.set('authorized', true);
            return state.merge(action.payload)
        default:
            return state;
    }
}