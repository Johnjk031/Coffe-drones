import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from "../redux/coffe/coffe-actions"

const Button = ({ addToCart, productData }) => {
  

    return(
      <section>
     
       <button onClick={() => addToCart(productData.id)}>+</button>
       
      </section>
    )
  }

  const mapDispatchToProps = dispatch => {
    return {
      addToCart: (id) => dispatch(addToCart(id))
    }
  }

  export default connect(null, mapDispatchToProps)(Button)
