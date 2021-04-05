import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../redux/coffe/coffe-actions';

const CartItem = ({ itemData }) => {
return (
<section>
    <article>
        <p>{itemData.coffe}</p>
    </article>
</section>
)
}




export default CartItem