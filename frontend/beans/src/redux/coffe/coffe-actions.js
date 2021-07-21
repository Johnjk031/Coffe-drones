import * as actionTypes from './coffe-types'




// info about actiontypes avalible in the reducer


export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};


export const addPurchase = (itemID) => {
    return {
        type: actionTypes.ADD_PURCHASE,
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


export const addToProducts = (product) => {
    return {
        type: actionTypes.ADD_TO_PRODUCTS,
        payload: product,
    };
};

export const signIn = (item) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: item,
    };
};
export const signOut = (item) => {
    return {
        type: actionTypes.SIGN_OUT,
        payload: item,
    };
};

export const addOrderNumber = (item) => {
    return {
        type: actionTypes.ADD_ORDER_NUMBER,
        payload: item,
    };
};

export const onlinePurchased = (item) => {
    return {
        type: actionTypes.ONLINE_PURCHASED,
        payload: item,
    };
};

export const addTime = (item) => {
    return {
        type: actionTypes.ADD_TIME,
        payload: item,
    };
};

export const startTime = (item) => {
    return {
        type: actionTypes.START_TIME,
        payload: item,
    };
};

export const tick = (item) => {
    return {
        type: actionTypes.TICK,
        payload: item,
    };
};




