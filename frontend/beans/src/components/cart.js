import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import CartItem from './cartitem'
import { Link } from 'react-router-dom';

const CartStatus = ( {cart} ) => {
    
    const [totalPrice, setTotalPrice] = useState(0);
    const[totalItem, setTotalItems] = useState(0);
    const [isBought, setIsbought] = useState(false);
    
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
    
  
    let buy = () => {
       if (totalItem >= 1) {

       setIsbought(true)
            }
    }

    console.log(isBought)
   
    
    

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

        <section>
            <Link to={{pathname: '/orderstatus', state: { isBought }}} onClick={buy}></Link>
           
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