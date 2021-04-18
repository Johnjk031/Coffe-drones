
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import CartStatus from './cart'
import './css/coffemenu.css'
import { connect } from 'react-redux'
import bag from './bag.svg'

const ModalFunction = ( {cart} ) => {
   
   const [cartCount, setCartCount] = useState(0)
   
   useEffect(() => {
       let count = 0;
       cart.forEach(item => {
           count += item.qty;
       });
       
       setCartCount(count);
   }, [cart, cartCount]);
   


    const [modalIsOpen, setModalIsOpen] = useState(false)

   return(
    <section>
    
    <button className="modalbtn" onClick={ () => setModalIsOpen(true) }><img className="modal-img" src={bag} alt="bag" /><button className="module-count">{cartCount}</button></button>
    
    <Modal isOpen={modalIsOpen} onRequestClose={ () => setModalIsOpen(false)} className={modalIsOpen ? "modal" : "hide"}>
     

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