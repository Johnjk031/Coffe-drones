import React from 'react'
import { connect } from "react-redux"
import CartItem from './cartitem'

const CartStatus = ( {cart} ) => {
    return(
        <section>
        
        <section> 
        { cart.map((item) =>(
        <CartItem key={item.id} itemData={item}/>
        ))}
        </section>

        <section>
            
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