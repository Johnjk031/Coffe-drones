import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import CartItem from './cartitem'

const CartStatus = ( {cart} ) => {
    
    const [totalPrice, setTotalPrice] = useState(0);
    const[totalItem, setTotalItems] = useState(0)
    
    useEffect(() => {
    let items = 0;
    let price = 0;
    let shipment = 20;

    cart.forEach(item => {
       items += item.qty;
       price += item.qty * item.price
    })

    if (items >= 1) {

    setTotalPrice(price + shipment);
    setTotalItems(items);
    }

    else {
        setTotalPrice(0)
    }

    }, [cart, totalPrice, setTotalPrice, setTotalItems])
    
    return(
        <section>
        
        <section> 
        { cart.map((item) =>(
        <CartItem key={item.id} itemData={item}/>
        ))}
        </section>

        <section>
       <p>{totalPrice}</p>
       <p>{totalItem}</p>
        </section>
        
        </section>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.drink.cart
    }
}


export default connect(mapStateToProps)(CartStatus)