import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import './css/coffemenu.css'
import Button from './button';
import header from './svgs/graphics-header.svg'
import footer from './svgs/graphics-footer.svg'
import ModalFunction from './Modal';
import axios from 'axios';
import { addToProducts } from '../redux/coffe/coffe-actions';
import { useDispatch } from 'react-redux'


const Coffemenu = ( { products, addToProducts }) => {
  
  // coffe details (json)
  const url = 'http://localhost:8080/api/coffe'

  // usestate to set products
  const [product, setProducts] = useState([])

  // use dispatch to store fetched products
  const dispatch = useDispatch();

// fetch json data to redux store & setproducts
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setProducts(response.data.menu)
      dispatch(addToProducts(response.data.menu))
    })
  }, [url])





  return(

<section className="main-menu">

<img src={header} alt="header" />

{/*/ cart */}
 <section> 
<ModalFunction />
</section> 

{/*/ mapping out relevant info from json */}
     {product.map(prod => (
       <section key={prod.id} className="prod-articles">
         
          {/*/ adding chosen item to cart */}
         <article className="menu-btn">
         <Button productData={prod} />
         </article>

         <article>
         <p className="menu-drinks">{prod.coffe}</p>
         <p className="menu-description">{prod.description}</p>
         </article>
         <article className="menu-price">
         <p className={`price-${prod.id}`}>{prod.price}</p>
         </article>
       </section>
     ))}
     
  

     <img className="menu-footer" src={footer} alt="footer" />
    </section>
  )
}


 // calling redux functions
const mapDispatchToProps = dispatch => {
  return {
      addToProducts: (id) => dispatch(addToProducts(id))
  }
}





export default connect(null, mapDispatchToProps) (Coffemenu);