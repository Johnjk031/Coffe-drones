import * as actionTypes from './coffe-types'
import axios from 'axios'

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
        id: itemID,
        qty: value
        },
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};

{/*
export const apiLoading = () => {
    return {
        type: API_LOADING,
    }
}

export const getApi = () => dispatch => {
dispatch(apiLoading());
axios
.get('http://localhost:8080/api/coffe')
.then(res =>
    dispatch({
     type: GET_API,
     payload: res.data
    })
    )
} */}