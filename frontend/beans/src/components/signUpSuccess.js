import React, { useEffect } from 'react'
import { signOut } from '../redux/coffe/coffe-actions';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import store from '../redux/store'



const SignedUp = ({ signOut }) => {

    const history = useHistory();
    let testVar = store.getState().drink
   

    let logOut = (e) => {
        e.preventDefault();
        signOut()
        history.push("/my-profile");
    }


  
 



    return (
        <section>

            <section>
                <br>
                </br>
                <br>
                </br>
                <h1>Kontot är skapat</h1>
                <p>{testVar.user.fullname}</p>
                

                {testVar.onlinePurchased.map(prod => (
       <section key={prod.id} className="prod-articles">
         <article className="menu-btn">
        <p>{prod.coffe}</p>
        <p>{prod.price}</p>
        
         </article>
         
       </section>
     ))}


                <button onClick={(e) => logOut(e)}>Logga ut</button>
            </section>

        </section>
        
    )
}
const mapStateToProps = dispatch => {
    return {
   
   signOut: (id) => dispatch(signOut(id))
    };
};

export default connect(null, mapStateToProps)(SignedUp)
