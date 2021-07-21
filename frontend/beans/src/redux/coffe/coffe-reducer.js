import * as actionTypes from './coffe-types';


// initial state to store
const INITAL_STATE = {
    products: [], 
    loading: false,
    cart: [],
    currentItem: null,
    purchased: [],
    user: {
        online: false
       },
    orderNumber: null,
    onlinePurchased: [],

   
    isOn: false,
    time: 10 
}



const coffeReducer = (state = INITAL_STATE, action, props) => {
    switch (action.type) {

        
        // adding product to cart & set quantity to +1
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



        // changing status on item from in cart to purchased & resets cart
            case actionTypes.ADD_PURCHASE:
        
            return {
                ...state,
                purchased: state.cart.map(item => item.id === action.payload.id ?
                    {...item, qty: +action.payload.qty }
                    : item
                    ), 
                    cart: []
            } 
     

        // removing items from cart
            case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),

            };


        // adjust quantity on selected items
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ?
                    {...item, qty: +action.payload.qty }
                    : item
                    ),
            };


        // sign cs in & chamge state on user
            case actionTypes.SIGN_IN:

                return {...state, user: action.payload}
                
        
       // sign cs out & reset "onlinePurchased" state
        case actionTypes.SIGN_OUT:

    
            return {...state, user: {
                online: false
               },
               onlinePurchased: []
            }




           
        // reset timer
            case actionTypes.ADD_TIME:

                return {...state, time: INITAL_STATE.time}


            // change bolean value to true
                case actionTypes.START_TIME:
                return {
                    
                        ...state,
                        isOn: true,
                        offset: action.offset,
                      };
                 
            // counting down timer 
                      case actionTypes.TICK:
                        return {
                          ...state,
                          time: state.time - 1,
                          offset: action.time
                        };
             
                 





     
        // replace state of "currentItem" depending on action
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };

      
         
            // replace state of "products" depending on action - the fetch goes here
            case actionTypes.ADD_TO_PRODUCTS: 
            
            return {...state, products: action.payload}
        
            
        
            // replace state of "orderNumber" depending on action
            case actionTypes.ADD_ORDER_NUMBER: 
            
            return {...state, orderNumber: action.payload}


          // // replace state of "onlinePurchased" to the state of "purchased" (if user is online when purchasing)
            case actionTypes.ONLINE_PURCHASED: 
            
            if (state.user.online
               ) {
                return {...state, onlinePurchased: state.purchased}
            }
            

         
        default:
            return state;
    
}
}
  

export default coffeReducer; 