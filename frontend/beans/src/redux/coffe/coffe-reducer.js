import * as actionTypes from './coffe-types';


const INITAL_STATE = {
    products: [
        {
            "id": 1,
            "coffe": "Bryggkaffe",
            "description": "Bryggd på månadens bönor",
            "price": 49
        },

        {
            "id": 2,
            "coffe": "Caffè Doppio",
            "description": "Bryggd på månadens bönor",
            "price": 49
        },

        {
            "id": 3,
            "coffe": "Cappuccino",
            "description": "Bryggd på månadens bönor",
            "price": 49
        },

        {
            "id": 4,
            "coffe": "Latte Macchiato",
            "description": "Bryggd på månadens bönor",
            "price": 49
        },

        {
            "id": 5,
            "coffe": "Kaffe Latte",
            "description": "Bryggd på månadens bönor",
            "price": 49
        },

        {
            "id": 6,
            "coffe": "Cortado",
            "description": "Bryggd på månadens bönor",
            "price": 39
        }
    ], // id, coffe, description, price
    loading: false,
    cart: [],
    currentItem: null,
}


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


        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };

        case actionTypes.API_LOADING:
                return {
                    ...state,
                    loading: true
                }
        
        
        
            case actionTypes.GET_API:
            return {
                ...state,
                items: action.payload,
                loading: false
            }





        default:
            return state;
    }
}

export default coffeReducer; 