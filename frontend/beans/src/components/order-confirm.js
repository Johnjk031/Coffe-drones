import React from "react"
import Timer from "./timeout";
import drone from "./svgs/drone.svg"
import './confirm.css'
import store from '../redux/store'
import { Link } from 'react-router-dom'

const OrderConfirm = () => {

   // display order number from redux store
    let orderNumber = store.getState().drink.orderNumber
   



    
    return(
        <section className="main-confirm">
            <section className="ordernumber">
            <p className="order-text">Ordernummer: #{orderNumber}</p>
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

    {/* linking cs back to main page */}
        <section className="button-section">
       <button className="confirm-btn"><Link className="link" to={{pathname: "/"}}>Perfekt</Link></button>
       </section>

        </section>
    )
}

export default OrderConfirm;