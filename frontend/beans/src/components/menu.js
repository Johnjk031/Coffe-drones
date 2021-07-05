import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import './css/coffemenu.css'
import Button from './button';
import header from './graphics-header.svg'
import footer from './graphics-footer.svg'
import { useAxiosGet } from './axiosFetch'

import ModalFunction from './Modal';
import axios from 'axios';
import { addToProducts } from '../redux/coffe/coffe-actions';
import { useDispatch } from 'react-redux'


const Coffemenu = ( { products, addToProducts }) => {
  
  const url = 'http://localhost:8080/api/coffe'

  const [product, setProducts] = useState([])

const dispatch = useDispatch();


  useEffect(() => {
    axios.get(url)
    .then(response => {
      setProducts(response.data.menu)
      dispatch(addToProducts(response.data.menu))
    })
  }, [url])



  console.log(product)




  return(



<section className="main-menu">

<img src={header} alt="header" />

{/*
<section className="bag-article">
<img src={bag} alt="bag" />
</section>
*/}

 <section> 
<ModalFunction />



</section> 
     {product.map(prod => (
       <section key={prod.id} className="prod-articles">
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



const mapDispatchToProps = dispatch => {
  return {
      addToProducts: (id) => dispatch(addToProducts(id))
  }
}





export default connect(null, mapDispatchToProps) (Coffemenu);