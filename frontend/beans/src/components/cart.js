import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import CartItem from './cartitem'
import { useHistory } from 'react-router-dom';
import { addPurchase } from '../redux/coffe/coffe-actions';
import { Link } from 'react-router-dom'
import './css/cartitem.css'


const CartStatus = ( {cart, addPurchase} ) => {


    let history = useHistory();

    

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

       addPurchase()
            }
    }


    
    let callFunctionTwo = () => {
        history.push("/orderstatus");
    }

    return(
        <section>
        
        <section> 
        { cart.map((item) =>(
        <CartItem key={item.id} itemData={item}/>
        ))}
        </section>

        <section>
       <p>Total.......................................................................{totalPrice}</p>
        </section>

        <section className="link-section">
        <button className="buy-link"><Link to={{pathname: '/orderstatus', state: { isBought }}} onClick={buy} style={{ textDecoration: 'none' }, {color: 'white'}}>Take my money</Link></button>
        {/*   
        <button onClick={buy}>Take my money</button>
        <button onClick={callFunctionTwo}>go next</button>
        */}
        </section>
        
    
        
    {/*<Router>
   <Switch>

    <Route exact path="/" component={()=>isBought?<MyStatus/> : <NoItems/>} />
    </Switch>
    </Router>*/}

        </section>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.drink.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPurchase: (id) => dispatch(addPurchase(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartStatus)