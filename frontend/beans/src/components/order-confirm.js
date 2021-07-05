import React from "react"
import Timer from "./timeout";
import drone from "./drone.svg"
import './confirm.css'
import store from '../redux/store'

const OrderConfirm = () => {

   
    let testVar = store.getState().drink.orderNumber
    



    
    return(
        <section className="main-confirm">
            <section className="ordernumber">
            <p className="order-text">Ordernummer: #{testVar}</p>
            </section>

          <img className="drone" src={drone} alt="drone" />

       <section className="confirm-section">
           <article className="confirm-article">
        <h1 className="order-header">Din beställning är påväg</h1>
        </article>
       </section>

      <section className="timer-section">
      <Timer />
      </section>


        <section className="button-section">
       <button className="confirm-btn">Ok, cool!</button>
       </section>

        </section>
    )
}

export default OrderConfirm;