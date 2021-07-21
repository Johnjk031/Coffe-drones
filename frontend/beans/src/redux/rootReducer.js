import { combineReducers } from 'redux'
import coffeReducer from './coffe/coffe-reducer'

// nameing my store to "drink"
const rootReducer = combineReducers({
    drink: coffeReducer,
});

export default rootReducer; 