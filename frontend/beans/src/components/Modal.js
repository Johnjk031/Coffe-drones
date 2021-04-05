
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import CartStatus from './cart'

import { connect } from 'react-redux'

const ModalFunction = ( {cart} ) => {
   
   const [cartCount, setCartCount] = useState(0)
   
   useEffect(() => {
       let count = 0;
       cart.forEach(item => {
           count += item.qty;
       });
       
       setCartCount(count);
   }, [cart, cartCount]);
   
console.log(cartCount)

    const [modalIsOpen, setModalIsOpen] = useState(false)

   return(
    <section className="modal">
    
    <button onClick={ () => setModalIsOpen(true) }>{cartCount}</button>
    
    <Modal isOpen={modalIsOpen} onRequestClose={ () => setModalIsOpen(false) }>
     <CartStatus />
    </Modal>
    
    </section>
    )
}

const mapStateToProps = state => {
return {
    cart: state.drink.cart
}
}

export default connect(mapStateToProps)(ModalFunction)