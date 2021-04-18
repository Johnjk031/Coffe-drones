import React from 'react';
import { connect } from 'react-redux'
import './css/coffemenu.css'
import Button from './button';
import header from './graphics-header.svg'
import footer from './graphics-footer.svg'


import ModalFunction from './Modal';


const Coffemenu = ( { products }) => {
  


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

     {products.map(prod => (
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

const mapStateToProps = state => {
return {
  products: state.drink.products
}
}



export default connect(mapStateToProps)(Coffemenu);