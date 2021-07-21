import React, {useState} from 'react';
import { connect } from 'react-redux'
import { adjustQty, removeFromCart } from '../redux/coffe/coffe-actions';
import './css/cartitem.css'
import './css/coffemenu.css'

const CartItem = ({ itemData, adjustQty }) => {

// storeing chosen amounts of selected coffe
const [input, setInput] = useState(itemData.qty)

const onChangeHandler = (e) => {
    setInput(e.target.value)
    adjustQty(itemData.id, e.target.value)
}

// returning choosen coffe drinks & number input to adjust quantity
return (
<section className="test">
    <article className="cart-item">
        <p className="cofe-p">{itemData.coffe}</p>
       <p>{itemData.price} kr</p>
       </article>
    
        <input
        className="inputnumber"
        min="0"
        max="9"
        type="number"
        id="qty"
        name="qty"
        value={input}
        onChange={onChangeHandler}
        />
        
    
</section>
)
}

// import redux functions

const mapDispatchToProps = dispatch => {
    return {
   removeFromCart: (id) => dispatch(removeFromCart(id)),
   adjustQty: (id, value) => dispatch(adjustQty(id, value))
    };
};

export default connect(null, mapDispatchToProps)(CartItem)