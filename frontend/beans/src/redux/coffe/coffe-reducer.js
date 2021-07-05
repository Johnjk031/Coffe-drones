import * as actionTypes from './coffe-types';


const INITAL_STATE = {
    products: [], // id, coffe, description, price
    loading: false,
    cart: [],
    currentItem: null,
    purchased: [],
    user: {
        online: false
       },
    orderNumber: null,
    onlinePurchased: []
}

let userStatus = INITAL_STATE.user


const coffeReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {

        
         case actionTypes.ADD_TO_CART:
        
         const item = state.products.find((prod) => prod.id === action.payload.id)
            const inCart = state.cart.find((item) =>
            item.id === action.payload.id ? true : false
            );
            
            return {
                ...state,
                cart: inCart 
                ? state.cart.map((item) =>
                item.id === action.payload.id 
                ? { ...item, qty: item.qty + 1 }
                 : item
                 )
                 : [...state.cart, { ...item, qty: 1 }],
            };


            case actionTypes.ADD_PURCHASE:
        
            return {
                ...state,
                purchased: state.cart.map(item => item.id === action.payload.id ?
                    {...item, qty: +action.payload.qty }
                    : item
                    ), 
                    cart: []
            } 
     

        
            case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),

            };


        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ?
                    {...item, qty: +action.payload.qty }
                    : item
                    ),
            };






            
            case actionTypes.SIGN_IN:

                return {...state, user: action.payload}
                
        






        case actionTypes.SIGN_OUT:

    
            return {...state, user: {
                online: false
               }}










        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };

      
          
            case actionTypes.ADD_TO_PRODUCTS: 
            
            return {...state, products: action.payload}
        
            

            case actionTypes.ADD_ORDER_NUMBER: 
            
            return {...state, orderNumber: action.payload}


            case actionTypes.ONLINE_PURCHASED: 
            
            if (state.user.online
               ) {
                return {...state, onlinePurchased: state.purchased}
            }
            


        default:
            return state;
    
}
}
  
export const checkUser = () => {
    return userStatus;
} 
export default coffeReducer; 