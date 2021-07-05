import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from "../redux/coffe/coffe-actions"
import './css/coffemenu.css'

const Button = ({ addToCart, productData }) => {
  console.log(productData)

    return(
      <section>
     
       <button className="add-btn" onClick={() => addToCart(productData.id)}>+</button>
      
      </section>
    )
  }

  const mapDispatchToProps = dispatch => {
    return {
      addToCart: (id) => dispatch(addToCart(id))
    }
  }

  export default connect(null, mapDispatchToProps)(Button)
