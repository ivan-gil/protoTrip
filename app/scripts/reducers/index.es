import { combineReducers } from 'redux'
import { authReducer } from './auth_reducer'
import { routerReducer } from 'react-router-redux'

let reducer = combineReducers({
    authorizing: authReducer,
    routing: routerReducer
});

export default reducer
