import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './css/coffemenu.css'
import Button from './button';

import ModalFunction from './Modal';

const Coffemenu = ( { products }) => {
  


  return(



<section>
   
 <section> 
<ModalFunction />
</section> 

     {products.map(prod => (
       <section key={prod.id} className="prod-articles">
         <article>
         <Button productData={prod} />
         </article>
         <article>
         <p>{prod.coffe}</p>
         </article>
         <article>
         <p>{prod.price}</p>
         </article>
       </section>
     ))}
     
  

    
    </section>
  )
}

const mapStateToProps = state => {
return {
  products: state.drink.products
}
}



export default connect(mapStateToProps)(Coffemenu);