import React from 'react'
import { signOut } from '../redux/coffe/coffe-actions';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import store from '../redux/store'
import './profile.css'
import header from './svgs/graphics-header.svg'
import footer from './svgs/graphics-footer.svg'


const SignedUp = ({ signOut }) => {

    // use history to "route" back when sign out
    const history = useHistory();

    // access state from redux store
    let drink = store.getState().drink
   
    // when user sign out
    let logOut = (e) => {
        e.preventDefault();
        signOut()
        history.push("/my-profile");
    }


  
 



    return (
        <section className="main-g">

            <section className="account-created">
            <img src={header} alt="header" />
                <h2>Kontot är skapat</h2>
                <p className="guide-text">Välkommen {drink.user.fullname}</p>
                <p className="guide-text">Du finner dina köp nedan:</p>

                {/* no items purchased text (if necessary) */}
                <section className="order-history-section">
                {drink.onlinePurchased >= 0 ? <p className="no-items-text">Du har inga köp registrerade hos oss</p> : ''}
              
                {/* map all online purchased items */}
                {drink.onlinePurchased.map(prod => (
       <section key={prod.id} className="prod-history">
         <article className="prod-items">
        <p>{prod.qty} {prod.coffe}...</p>
        <p className={`price-history${prod.id}`}>{prod.price * prod.qty}</p>
        
         </article>
         
       </section>
                
     ))}
</section>

                <button className="sign-out-btn" onClick={(e) => logOut(e)}>Logga ut</button>
            </section>

            <img className="sign-out-footer" src={footer} alt="footer" />
        </section>
        
    )
}

// calling redux functions
const mapStateToProps = dispatch => {
    return {
   
   signOut: (id) => dispatch(signOut(id))
    };
};

export default connect(null, mapStateToProps)(SignedUp)
