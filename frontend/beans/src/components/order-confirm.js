import { useEffect, useState } from "react"
import Timer from "./timeout";
import drone from "./drone.svg"
import './confirm.css'

const OrderConfirm = () => {

   
   
    

    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }





    
    return(
        <section className="main-confirm">
            <section className="ordernumber">
            <p className="order-text">Ordernummer: #{getRandomString(8)}</p>
            </section>

          <img src={drone} alt="drone" />

       <section className="confirm-section">
        <h1 className="order-header">Din order är påväg</h1>
       </section>

      <section className="timer-section">
      <Timer />
      </section>


        <section className="button-section">
       <button className="confirm-btn">Ok cool</button>
       </section>

        </section>
    )
}

export default OrderConfirm;