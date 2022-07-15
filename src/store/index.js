import userReducer from "./reducer";
import thunk from 'redux-thunk'
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'

const store = createStore(userReducer, applyMiddleware(thunk))

export { store }