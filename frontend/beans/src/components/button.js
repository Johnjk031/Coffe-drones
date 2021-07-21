import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from "../redux/coffe/coffe-actions"
import './css/coffemenu.css'

const Button = ({ addToCart, productData }) => {
  
    // adding chosen item to cart 

    return(
      <section>
     
       <button className="add-btn" onClick={() => addToCart(productData.id)}>+</button>
      
      </section>
    )
  }

  // calling redux functions

  const mapDispatchToProps = dispatch => {
    return {
      addToCart: (id) => dispatch(addToCart(id))
    }
  }

  export default connect(null, mapDispatchToProps)(Button)
