import {combineReducers} from 'redux';
import coffeReducer from './coffe-reducer';


const allBeans = combineReducers({
    beans: coffeReducer
});