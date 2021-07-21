import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import CartItem from './cartitem'
import { addPurchase, addOrderNumber, onlinePurchased, addTime, startTime, tick } from '../redux/coffe/coffe-actions';
import { Link } from 'react-router-dom'
import './css/cartitem.css'




const CartStatus = ( {cart, addPurchase, addOrderNumber, onlinePurchased, addTime, tick} ) => {


    
   

    
  // declared states for setting total price

    const [totalPrice, setTotalPrice] = useState(0);
    const[totalItem, setTotalItems] = useState(0);
    
    // effect for total price 
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
    

    // random string for ordernumber

    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }


    

// buy button
  
    let buy = () => {
       if (totalItem >= 1) {

    // redux store:
    
    //adding bought product 
       addPurchase()
    
       // adding ordernumber
       addOrderNumber(getRandomString(8))
    
       // adding user history
       onlinePurchased()
    
       //  reset timer
       addTime()

        // start timer
       const interval = setInterval(() => {
        
        // set interval on function "tick" & timeout interval on clering
        tick()
          setTimeout(() => {
            clearInterval(interval)
        }, 588000);
    }
    , 60000);
            }




    }



    return(
        <section>
            <section className="your-order">
            <h1>Din beställning</h1>
            </section>
       
       {/* selected items mapped from cartitem.js */}
        <section className="selected-coffe"> 
        { cart.map((item) =>(
        <CartItem key={item.id} itemData={item}/>
        ))}
        </section>

       
        <section className="price-section">
       <p className="total-price">Total......................................... {totalPrice}</p>
        </section>

        {/* linking to new path & call the redux functions here */}
        <section className="link-section">
        <button className="buy-link"><Link to={{pathname: '/orderstatus'}} onClick={buy} style={{ textDecoration: 'none' }} className="link-text">Take my money</Link></button>
        </section>
     
        
    

        </section>
    )
}
// import redux states & functions

const mapStateToProps = state => {
    return {
        cart: state.drink.cart,
        time: state.drink.time
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPurchase: (id) => dispatch(addPurchase(id)),
        
        addOrderNumber: (id) => dispatch(addOrderNumber(id)),

        onlinePurchased: (id) => dispatch(onlinePurchased(id)),

        addTime: (id) => dispatch(addTime(id)),

        startTime: (id) => dispatch(startTime(id)),

        tick: (id) => dispatch(tick(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartStatus)