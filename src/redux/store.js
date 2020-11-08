import { createStore , applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import state from './state'
import reducer from './reducer'

export default createStore(reducer, state, applyMiddleware(thunk))