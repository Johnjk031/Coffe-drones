import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk';

//redux thunk
const middlewares = [thunk];
// redux devtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)))

export default store 