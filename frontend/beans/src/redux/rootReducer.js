import { combineReducers } from 'redux'
import coffeReducer from './coffe/coffe-reducer'

const rootReducer = combineReducers({
    drink: coffeReducer,
});

export default rootReducer; 