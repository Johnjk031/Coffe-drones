import React, {useState} from 'react';
import { connect } from 'react-redux'
import { adjustQty, removeFromCart } from '../redux/coffe/coffe-actions';
import './css/cartitem.css'


const CartItem = ({ itemData, adjustQty }) => {

const [input, setInput] = useState(itemData.qty)

const onChangeHandler = (e) => {
    setInput(e.target.value)
    adjustQty(itemData.id, e.target.value)
}



return (
<section className="test">
    <article>
        <p>{itemData.coffe}</p>
        <p>{itemData.price}</p>
        <input
        min="0"
        type="number"
        id="qty"
        name="qty"
        value={input}
        onChange={onChangeHandler}
        />
        <button>^</button>
        <button>-</button>
    </article>
</section>
)
}


const mapDispatchToProps = dispatch => {
    return {
   removeFromCart: (id) => dispatch(removeFromCart(id)),
   adjustQty: (id, value) => dispatch(adjustQty(id, value))
    };
};

export default connect(null, mapDispatchToProps)(CartItem)