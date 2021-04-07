import { useEffect, useState } from "react"
import Timer from "../timeout";

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
        <section>
            <p>KUNG E DU</p>
          <p>{getRandomString(8)}</p>

        <Timer />

        </section>
    )
}

export default OrderConfirm;