
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import CartStatus from './cart'
import './css/coffemenu.css'
import { connect } from 'react-redux'
import bag from './svgs/bag.svg'

const ModalFunction = ( {cart} ) => {
   
    // setting count on cartitems 
   const [cartCount, setCartCount] = useState(0)
   
   useEffect(() => {
       let count = 0;
       cart.forEach(item => {
           count += item.qty;
       });
       
       setCartCount(count);
   }, [cart, cartCount]);
   

    // usestate to set modal (displayed cartitems) open / closed 
    const [modalIsOpen, setModalIsOpen] = useState(false)

   return(
    <section>

    <button className="modalbtn" onClick={ () => setModalIsOpen(true) }><img className="modal-img" src={bag} alt="bag" /><span className="module-count">{cartCount}</span></button>
    
    {/* installed module */}
    <Modal isOpen={modalIsOpen} onRequestClose={ () => setModalIsOpen(false)} className={modalIsOpen ? "modal" : "hide"}>
     
{/* cart component displayed while modal 'isOpen' */}
     <CartStatus />
    </Modal>
    
    </section>
    )
}

 // calling redux states

const mapStateToProps = state => {
return {
    cart: state.drink.cart
}
}

export default connect(mapStateToProps)(ModalFunction)