
import reducer from './reducers/index'
import { createStore } from 'redux'

let store = createStore(reducer);

export default store